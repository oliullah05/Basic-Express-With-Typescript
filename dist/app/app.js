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
const userRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
userRouter.get("/create-user", (req, res) => {
    const userData = req.body;
    console.log(userData);
    res.json({
        success: true,
        message: "user is created successfully",
        data: userData
    });
});
const courseRouter = express_1.default.Router();
app.use("/api/v1/courses", courseRouter);
courseRouter.get("/", courseRouter);
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created successfully",
        data: course
    });
});
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Intentionally using an undefined variable to cause an error
        res.send(something);
    }
    catch (err) {
        console.log(err);
        next(err);
        // res.status(404).json({
        //   success: false,
        //   message: "fail to get data"
        // })
    }
    // res.send('Hello Developers222!')
}));
app.post('/route2', logger, (req, res) => {
    console.log(req.body);
    res.json({
        "message": "sueccesfully get data"
    });
});
// global route error show
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        messange: "you enter wrong route"
    });
});
// global error handler 
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went erong"
        });
    }
});
exports.default = app;
