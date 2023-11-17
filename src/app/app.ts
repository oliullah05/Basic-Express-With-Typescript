import express, { NextFunction, Request, Response } from "express"
const app = express()


//persers
app.use(express.json())
app.use(express.text())

//middle wars
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next()
}



const userRouter = express.Router();
app.use('/api/v1/users', userRouter)
userRouter.get("/create-user", (req: Request, res: Response) => {
  const userData = req.body;
  console.log(userData);
  res.json({
    success: true,
    message: "user is created successfully",
    data: userData
  })
})


const courseRouter = express.Router();
app.use("/api/v1/courses", courseRouter)
courseRouter.get("/", courseRouter)

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course is created successfully",
    data: course
  })
})



app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Intentionally using an undefined variable to cause an error
    res.send(something)
  }
  catch (err) {
    console.log(err);
    next(err)
    // res.status(404).json({
    //   success: false,
    //   message: "fail to get data"
    // })
  }





  // res.send('Hello Developers222!')
})


app.post('/route2', logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    "message": "sueccesfully get data"
  })
})






// global route error show

app.all("*",(req:Request,res:Response)=>{
  res.status(400).json({
    success:false,
    messange:"you enter wrong route"
  })
})




// global error handler 
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
 if(error){
  res.status(400).json({
    success:false,
    message:"something went erong"
  })
 }
})

export default app;