const yup=require("yup")

const schema1=yup.object().shape({
    email:yup.string().email("invalid email").required(),
    password:yup.string().required().min(3)
})


module.exports=schema1