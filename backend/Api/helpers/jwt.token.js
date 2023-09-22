const jwt=require("jsonwebtoken")
const createError=require("http-errors")
const client=require("../helpers/redis.init")


module.exports={
    signAccessToken:(userId)=>{
        return new Promise((resolve,reject)=>{
            const payload={
                audience:userId
            }

            const secret="1CA91FB45E49F84D273A5431EEECA"

            const options={
                expiresIn:'5s',
                issuer:"www.aditya.com"
            }

            jwt.sign(payload,secret,options,(err,token)=>{
                if(err) reject(err)

                resolve(token)
            })

        })
    },
    signRefreshToken:(userId)=>{
        return new Promise((resolve,reject)=>{
            const payload={
                audience:userId
            }

            const secret="862AC91A316B5CEC195CA213626CD"

            const options={
                expiresIn:'1h',
                issuer:"www.aditya.com"
            }
            // console.log(userId)
            jwt.sign(payload,secret,options,async(err,token)=>{
                if(err) reject(createError.InternalServerError())

                client.SET(userId,token,'EX',60*60,(err,reply)=>{
                    if(err)
                    {
                        console.log(err.message)
                        reject(createError.InternalServerError())
                        return
                    }
                    resolve(token)
                })
            })
        })
    },

    verifyAccessToken:(req,res,next)=>{
        const head=req.headers['authorization']
        // console.log(head)
        if(!head) return next(createError.Unauthorized())

        const bearer=head.split(" ")
        const token=bearer[1]
        // console.log(token)

        jwt.verify(token,"1CA91FB45E49F84D273A5431EEECA",(err,payload)=>{
            if(err)
            {
                if(err.name=="JsonWebTokenError")
                return next(createError.InternalServerError("invalid token"))
                else
                return next(createError.Unauthorized(err.message))
            }

            req.payload=payload
            next()
        })
    },
    verifyRefreshToken:(token)=>{
        return new Promise((resolve,reject)=>{
            jwt.verify(token,"862AC91A316B5CEC195CA213626CD",(err,payload)=>{
                if(err) return reject(createError.Unauthorized("invalid token"))

                const userId=payload.audience

                client.GET(userId,(err,res)=>{
                    if(err)
                    {
                        console.log(err)
                        reject(createError.Unauthorized("invalid Token"))
                        return
                    }

                    if(res==token) resolve(userId)

                    reject(createError.Unauthorized())
                })

                // resolve(payload.audience)
            })
        })
    }
}
