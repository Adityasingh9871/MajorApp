const express=require("express")
const route=express.Router()
const createError=require("http-errors")
const schema=require("../helpers/joi.validation")
const User=require("../dbModels/user.model")
const {signAccessToken,signRefreshToken,verifyAccessToken,verifyRefreshToken} = require("../helpers/jwt.token")
const client=require("../helpers/redis.init")


route.get('/',verifyAccessToken,(req,res,next)=>{
    try {
        res.send("authentication route")
    } catch (error) {
        next(err)
    }
})

route.post('/register',async(req,res,next)=>{
    try {
        // console.log(req.body)
        const result=await schema.validateAsync(req.body)
        // console.log("res",result)
        if(!result) throw createError.BadRequest()
        
        const isExist=await User.findOne({email:result.email})
        // console.log(isExist)
        if(isExist) throw createError.Conflict(`${result.email} already exists`)
        
        const user=new User(result)
        // console.log(user)
        const isSaved=await user.save()
        // console.log("sav",isSaved)
        const accessToken=await signAccessToken(isSaved.id)
        const refreshToken=await signRefreshToken(isSaved.id)

        res.send({accessToken,refreshToken})

        // res.send(result)
    } catch (error) {
        next(error)
    }
})

route.post("/login",async(req,res,next)=>{
    try {
        
        const result=await schema.validateAsync(req.body)
        // console.log(result)
        const user=await User.findOne({email:result.email})
        // console.log(isExist)
        if(!user) throw createError.NotFound("no user found")

        const isvalid=await user.validatePassword(result.password)

        if(!isvalid) throw createError.Unauthorized("wrong password")
        
        const accessToken=await signAccessToken(user.id)
        
        const refreshToken=await signRefreshToken(user.id)
        
        res.send({accessToken,refreshToken})


    } catch (error) {
        if(error.isJoi==true) return next(createError.BadRequest("invalid username and password"))
        next(error)
    }
})

route.post("/refreshToken",async(req,res,next)=>{
    try {
        // console.log(req.body)
        const {refreshToken}=req.body
        // console.log(refreshToken)
        if(!refreshToken) throw createError.BadRequest("invalid token")

        const userid=await verifyRefreshToken(refreshToken)

        const newAccessToken=await signAccessToken(userid)
        const newRefreshToken=await signRefreshToken(userid)

        res.send({accessToken:newAccessToken,refreshToken:newRefreshToken})

    } catch (error) {
        next(error)
    }
})

route.delete("/logout",async(req,res,next)=>{
    try {
        const {refreshToken}=req.body

        if(!refreshToken) throw createError.BadRequest()

        const userId=await verifyRefreshToken(refreshToken)

        client.del(userId,(err,val)=>{
            if(err) throw createError.InternalServerError()

            console.log(val)
            res.sendStatus(204)
        })

    } catch (error) {
        next(error)
    }
})



module.exports=route