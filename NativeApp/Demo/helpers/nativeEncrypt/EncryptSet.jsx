const EncryptedStorage = require("react-native-encrypted-storage");

export default async function EncryptSet()
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