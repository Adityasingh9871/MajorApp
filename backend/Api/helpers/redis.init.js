const redis=require("redis")

const client=redis.createClient({
    port:6379,
    host:"127.0.0.1",
})
// client.connect();

client.on('error',(err)=>{
    console.log(err)
})


client.on('connect',()=>{
    console.log("client connected to redis")
})


client.on('ready',()=>{
    console.log("redis ready to use")
})

client.on('end',()=>{
    console.log("client disconnected to redis")
})

process.on("SIGINT",()=>{
    client.quit()
})


module.exports=client