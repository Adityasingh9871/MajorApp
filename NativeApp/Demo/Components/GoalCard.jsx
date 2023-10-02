import {View,Text,Dimensions,Button} from "react-native"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GoalCard({M_Salary,R_Goal,R_Time})
{
  var c="#0073CF"
  var t=R_Time.toLocaleString()
  console.log("time",t,R_Time)
  
  return(
    
    <View style={{height:windowHeight*.30,backgroundColor:c,display:"flex",padding:5,borderRadius:20,margin:10}}>

      <View style={{flex:1,backgroundColor:c,margin:5,display:"flex",padding:2,flexDirection:"row"}}>
        <View style={{flex:2,margin:2,backgroundColor:c,justifyContent:"space-around",alignItems:"center"}}><Text style={{fontSize:23,color:"white"}}>Monthly Salary</Text></View>
        <View style={{flex:1,margin:2,backgroundColor:"white",borderRadius:20,justifyContent:"space-around",alignItems:"center"}}><Text style={{fontSize:23,color:"black"}}>{M_Salary}</Text></View>
      </View>
      <View style={{flex:3,backgroundColor:c,margin:2,display:"flex",padding:2,flexDirection:"row"}}>
        <View style={{flex:1,margin:2,backgroundColor:c,display:"flex",padding:2}}>
          <View style={{flex:1,margin:2,backgroundColor:c,justifyContent:"space-around",alignItems:"center"}}><Text style={{fontSize:28,color:"white"}}>Goal</Text></View>
          <View style={{flex:3,margin:2,backgroundColor:"white",borderRadius:20,justifyContent:"space-around",alignItems:"center"}}><Text style={{fontSize:58,color:"black"}}>{R_Goal}</Text></View>
        </View>
        <View style={{flex:1,margin:2,backgroundColor:c,display:"flex",padding:2}}>
          <View style={{flex:1,margin:2,backgroundColor:c,justifyContent:"space-around",alignItems:"center"}}><Text style={{fontSize:28,color:"white"}}>Time</Text></View>
          <View style={{flex:3,margin:2,backgroundColor:"white",borderRadius:20,justifyContent:"space-around",alignItems:"center"}}><Text style={{fontSize:58,color:"black"}}>{R_Time}yr</Text></View>
        </View>
      </View>

    </View>


    
  )
}