import { Text,Button,View,StyleSheet,Image,Dimensions } from "react-native"
import Card1 from "../Components/Card1";

// import EncryptedStorage from 'react-native-encrypted-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const { RNEncryptedStorage } = NativeModules;


export default function TestScreen()
{

  // console.log(windowHeight)

    const handleClick=()=>{
      console.log("click")
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