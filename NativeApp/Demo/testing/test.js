const schema1=require("../helpers/yup")

const data={
    email:"abc@gmail.com",
    password:"aaa"
}

schema1.validate(data).catch((err)=>{
    console.log(err)
    console.log(err.errors)
})
