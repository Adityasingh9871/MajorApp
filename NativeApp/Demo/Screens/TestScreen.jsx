import { Text,Button,View,StyleSheet,Image,Dimensions } from "react-native"
import Card1 from "../Components/Card1";

// import EncryptedStorage from 'react-native-encrypted-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const { RNEncryptedStorage } = NativeModules;
import axios from "axios"
import setdata from '../helpers/asyncStorageSetItem';
import getdata from "../helpers/asyncStorageGetItem"
import removedata from "../helpers/asyncStorageRemoveItem";
import handleRefreshoken from "../helpers/refresh-token";

export default function TestScreen()
{


    const handleClick=async()=>{
      console.log("click")
      const AccessToken=await getdata("accessToken")
      const config={
        headers:{authorization:`Bearer ${AccessToken}`}
      }
      await axios.get("http://localhost:8080/auth",config)
      .then(()=>{
        console.log("access granted")
      })
      .catch(async error=>{
        if(error.response.status==401)
        {
          handleRefreshoken()
        }
      })
      }
    
    return(
      <View>
        {/* <Card1 /> */}
        <Button title="Click" onPress={handleClick} />
      </View>
    )
}

const styles=StyleSheet.create({
  container:{
    // height:windowHeight
  },
  UpperBox:{
    width:"100%",
    height:windowHeight*.3,
    backgroundColor:"blue",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  }

})