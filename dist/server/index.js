"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var next_1 = __importDefault(require("next"));
var db_json_1 = __importDefault(require("./database/db.json"));
var body_parser_1 = __importDefault(require("body-parser"));
var multer_1 = __importDefault(require("multer"));
var fs_1 = __importDefault(require("fs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var helper_1 = require("../utils/helper");
var dev = process.env.NODE_ENV !== "production";
var app = (0, next_1.default)({ dev: dev });
var handle = app.getRequestHandler();
var port = process.env.PORT || 3000;
var server = (0, express_1.default)();
server.use(body_parser_1.default.json({ limit: '50mb' }));
server.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
server.use(express_1.default.static(__dirname + "/public/uploads"));
//@ts-ignore
var storage = multer_1.default.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = (0, multer_1.default)({ storage: storage });
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, app.prepare()];
            case 1:
                _a.sent();
                server.all("*", function (req, res) {
                    return handle(req, res);
                });
                server.listen(port, function (err) {
                    if (err)
                        throw err;
                    console.log("> Ready on localhost:".concat(port, " - env ").concat(process.env.NODE_ENV));
                });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.error(e_1);
                process.exit(1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })();
//@ts-ignore
var authenticateJWT = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader) {
        var token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, helper_1.getToken, function (err, user) {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
server.get('/server/fetch-all', function (req, res) {
    res.json(db_json_1.default);
});
server.get('/server/product/fetch', function (req, res) {
    res.json(db_json_1.default.filter(function (p) { return p.type === 'product'; }));
});
server.post('/server/product/create', function (req, res) {
    var jsonString = fs_1.default.readFileSync(__dirname + "/database/db.json");
    //@ts-ignore
    var newProduct = JSON.parse(jsonString);
    newProduct.push(req.body);
    fs_1.default.writeFile(__dirname + "/database/db.json", JSON.stringify(newProduct), function (err) {
        if (err)
            console.log("Error writing file:", err);
    });
    db_json_1.default.push(req.body);
    res.status(201).json(req.body);
});
server.post('/server/product/upload-image', upload.single('myFile'), function (req, res) {
    console.log(req.body.file + " file successfully uploaded !!");
    res.sendStatus(200);
});
server.post('/server/login', function (req, res) {
    var jsonString = fs_1.default.readFileSync(__dirname + "/database/db.json");
    //@ts-ignore
    var data = JSON.parse(jsonString);
    var admin = data.find(function (d) { return d.username === req.body.username && d.password === req.body.password; });
    if (admin) {
        var token = jsonwebtoken_1.default.sign({
            data: req.body
        }, 'secret', { expiresIn: '1day' });
        return res.sendStatus(200);
    }
    else {
        return res.sendStatus(400);
    }
});
server.get('/server/contents/fetch', function (req, res) {
    res.json(db_json_1.default.filter(function (p) { return p.type === 'content'; }));
});
exports.default = server;
