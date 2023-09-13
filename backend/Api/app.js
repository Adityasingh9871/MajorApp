const express=require("express")
const app=express()
app.use(express.json())
const createError=require("http-errors")
const authRoutes=require("./AuthRoutes/auth.route")
require("./helpers/mongodb.init")
require("./helpers/redis.init")
const cors=require("cors")
app.use(cors())

app.get('/',(req,res,next)=>{
    try {
        res.send("default endpoint")
        
    } catch (error) {
        next(err)
    }
})

app.use("/auth",authRoutes)

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    })
})

app.listen(8080,(req,res)=>{
    console.log("server is listining")
})