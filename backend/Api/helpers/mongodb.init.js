const mongoose=require("mongoose")
const password = encodeURIComponent("Avengers");
const stringUri=`mongodb+srv://testuser:${password}@cluster0.riu21of.mongodb.net/?retryWrites=true&w=majority`
const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true ,
    // useFindAndModify:false
}
mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"authentication_db"})
.then(()=>{
    console.log("connected to mongodb database")
})
.catch((err)=>{
    console.log(err)
})

process.on("SIGINT",async()=>{
    await mongoose.connection.close()
    process.exit(0)
})
