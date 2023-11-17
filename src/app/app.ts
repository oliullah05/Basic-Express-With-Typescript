import express, { Request, Response } from "express"
const app = express()


//persers
app.use(express.json())
app.use(express.text())









app.get('/', (req:Request, res:Response) => {
  res.send('Hello Developers222!')
})

app.post('/',(req:Request,res:Response)=>{
    console.log(req.body);
    res.json({
      "message":"sueccesfully get data"
    })
})












export default app;