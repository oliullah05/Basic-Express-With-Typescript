import express, { NextFunction, Request, Response } from "express"
const app = express()


//persers
app.use(express.json())
app.use(express.text())

//middle wars
const logger = (req:Request,res:Response,next:NextFunction)=>{
  console.log(req.url,req.method,req.hostname);
  next()
}






app.get('/', logger,(req:Request, res:Response) => {
  console.log(req.query);
  // console.log(req.params);
  res.send('Hello Developers222!')
})

app.post('/',logger,(req:Request,res:Response)=>{
    console.log(req.body);
    res.json({
      "message":"sueccesfully get data"
    })
})












export default app;