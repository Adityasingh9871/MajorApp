const EncryptedStorage =require("react-native-encrypted-storage")

const MakeDeviceLogin=async function()
{
    try {
        await EncryptedStorage.setItem("isLoggedIn",JSON.stringify({
            username:"aditya"
        }))

    } catch (error) {
        console.log(error)
        return false
    }
}

const GetDeviceLogin=async function()
{
    try {
        const session=await EncryptedStorage.getItem("isLoggedIn")
        if(session!==undefined)
        {
            return true
        }
        else
        return false
    } catch (error) {
        console.log(error)
        return false
    }
}
export {MakeDeviceLogin,GetDeviceLogin}