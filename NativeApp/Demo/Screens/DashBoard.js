import { Text,View,StyleSheet,Image,Dimensions,FlatList,ScrollView } from "react-native"
import Card1 from "../Components/Card1";
import Card2 from "../Components/Card2";
import { useState } from "react";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DashBoard()
{
  const [data1,setdata1]=useState([[26690,"C"],[64164,"C"],[84684,"D"],[6421,"D"],[6841,"D"],[8564,"C"],[2315,"C"],[32165,"D"]])
  // var arr=[[26690,"C"],[64164,"C"],[84684,"D"],[6421,"D"],[6841,"D"],[8564,"C"],[2315,"C"],[32165,"D"]]
  // setdata1(arr)
  // console.log(data1)
    return(
      <View>
        <View style={styles.container}>
          <View style={styles.UpperBox}>
          <Card1 style={styles.card1} />
          </View>
        </View>

      
        <FlatList 
        data={data1}
        renderItem={(x)=><Card2 amount={x.item[0]} type={x.item[1]}/>}
        />
        
        
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