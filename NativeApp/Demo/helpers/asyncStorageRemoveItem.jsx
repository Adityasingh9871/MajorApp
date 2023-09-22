import AsyncStorage from "@react-native-async-storage/async-storage";
// const AsyncStorage=require("@react-native-async-storage/async-storage")
export default async function removedata(data){
    try {
        return await AsyncStorage.removeItem(data) 
    } catch (error) {
        console.log(error)
    }
}

