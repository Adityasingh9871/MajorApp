const joi=require("@hapi/joi")

const schema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().required().min(3),
    mobile:joi.number(),
    name:joi.string()
})


module.exports=schema