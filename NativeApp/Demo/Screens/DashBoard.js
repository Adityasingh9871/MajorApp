import { Text,View,StyleSheet,Image,Dimensions, ScrollView } from "react-native"
import Card1 from "../Components/Card1";
import Card2 from "../Components/Card2";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DashBoard()
{
    return(
        <View>
          <View style={styles.container}>
            <View style={styles.UpperBox}>
            <Card1 style={styles.card1} />
            </View>
          </View>
          <ScrollView >
            <Card2 type="Debit" amount="26690" />
            <Card2 type="Credit" amount="2690" />
            <Card2 type="Debit" amount="6690" />
            <Card2 type="Credit" amount="5370" />
            <Card2 type="Credit" amount="7370" />
            <Card2 type="Credit" amount="2370" />
            <Card2 type="Debit" amount="9030" />
            <Card2 type="Credit" amount="4030" />
          </ScrollView>
          
          
        </View>
      )
}

const styles=StyleSheet.create({
    container:{
      // height:windowHeight
      // flex: 1,
    // flexDirection:'row',
    },
    UpperBox:{
      width:"100%",
      height:windowHeight*.2,
      backgroundColor:"#0049B7",
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      // flex:1,
    },
    card1:{
      marginTop:50

    }
  
  })