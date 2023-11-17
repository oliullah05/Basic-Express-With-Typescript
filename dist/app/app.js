"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//persers
app.use(express_1.default.json());
app.use(express_1.default.text());
//middle wars
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    console.log(req.query);
    // console.log(req.params);
    res.send('Hello Developers222!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        "message": "sueccesfully get data"
    });
});
exports.default = app;
