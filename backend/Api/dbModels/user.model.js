const number = require("@hapi/joi/lib/types/number")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:number,
        unique:true
    },
    name:{
        type:String
    }
})

userSchema.pre('save',async function(next){
    try {
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(this.password,salt)

        this.password=hashedPassword
        console.log(hashedPassword)
        next()
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})

userSchema.methods.validatePassword=async function(password)
{
    try {
        return await bcrypt.compare(password,this.password)
    } catch (error) {
        next(error)
    }
}

const User=mongoose.model("user",userSchema)

module.exports=User