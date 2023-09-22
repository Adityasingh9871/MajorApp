import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function setdata(data){
    try {
      await AsyncStorage.setItem(
        "refreshToken",data.refreshToken
      )
      await AsyncStorage.setItem(
        "accessToken",data.accessToken
      )
      console.log("data saved in async storage")
    } catch (error) {
      console.log("error in saving data",error)
    }
  }

