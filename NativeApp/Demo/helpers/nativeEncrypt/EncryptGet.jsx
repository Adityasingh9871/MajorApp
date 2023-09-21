const EncryptedStorage = require("react-native-encrypted-storage");

export default async function EncryptGet()
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
