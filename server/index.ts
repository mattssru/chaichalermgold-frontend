import express, { Request, Response } from "express"
import next from "next";
import product from './database/db.json'
import bodyParser from "body-parser";
import multer from 'multer'
import fs from 'fs'

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const server = express(); 
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(express.static(__dirname + "/public/uploads"));

const imageUploadPath = process.env.PUBLIC_URL + '/uploaded_files';
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

server.get('/server/get', (req, res) => {
  res.json(product)
})

server.post('/server/update', (req, res) => { 
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