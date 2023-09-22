import getdata from "./asyncStorageGetItem"
import setdata from "./asyncStorageSetItem"
import removedata from "./asyncStorageRemoveItem"
import axios from "axios"


export default async function handleRefreshoken()
{
    const RefreshToken=await getdata("refreshToken")
    await axios.post("http://localhost:8080/auth/refreshToken",{refreshToken:RefreshToken})
    .then(async (response)=>{
    await removedata("refreshToken")
    await removedata("accessToken")
    await setdata(response.data)
    console.log("new refresh and access token saved")
    })
    .catch(error=>{
        console.log(error)
      })
}