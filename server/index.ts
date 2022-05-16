import express, { Request, Response } from "express"
import next from "next";
import product from './database/db.json'
import bodyParser from "body-parser";
import multer from 'multer'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import { getToken, setToken } from "../utils/helper";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3001;

const server = express(); 
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(express.static(__dirname + "/public/uploads")); 

//@ts-ignore
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb ) {
      cb( null, file.originalname);
  }
})

const upload = multer({ storage: storage });

(async () => {
  try {
    await app.prepare();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

//@ts-ignore
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, getToken, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

server.get('/server/product/fetch', authenticateJWT, (req, res) => {
  res.json(product)
})

server.post('/server/product/create', (req, res) => { 
  const jsonString = fs.readFileSync(__dirname+"/database/db.json");
  //@ts-ignore
  const newProduct = JSON.parse(jsonString);
  newProduct.push(req.body)

  fs.writeFile(__dirname+"/database/db.json", JSON.stringify(newProduct), err => {
    if (err) console.log("Error writing file:", err);
  }); 
  product.push(req.body)
  res.status(201).json(req.body)
})

server.post('/server/upload-image', upload.single('myFile'), (req, res) => {
  console.log(req.body.file + " file successfully uploaded !!");
  res.sendStatus(200);
})

server.post('/server/login', (req, res) => {
  const jsonString = fs.readFileSync(__dirname+"/database/db.json");
  //@ts-ignore
  const data = JSON.parse(jsonString); 
  const admin = data.find((d :any) => d.username === req.body.username && d.password === req.body.password)
  if(admin) {
    const token = jwt.sign({
      data: req.body
    }, 'secret', { expiresIn: '1day' }); 
    return res.sendStatus(200);
  } else {
    return res.sendStatus(400);
  } 
})

export default server
