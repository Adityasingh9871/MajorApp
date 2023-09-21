import { Text,View,StyleSheet,Image,Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DashBoard()
{
    return(
        <View>
          <View style={styles.UpperBox}>
            <Text> DashBoard</Text>
          </View>
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