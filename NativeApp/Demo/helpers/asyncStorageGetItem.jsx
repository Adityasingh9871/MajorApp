import AsyncStorage from "@react-native-async-storage/async-storage";
// const AsyncStorage=require("@react-native-async-storage/async-storage")
export default async function getdata(data){
    try {
        return await AsyncStorage.getItem(data) 
    } catch (error) {
        console.log(error)
    }
}

