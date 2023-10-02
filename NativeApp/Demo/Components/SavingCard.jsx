import {View,Text,Dimensions,Button,FlatList,Modal,TextInput} from "react-native"
import GoalCard from "../Components/GoalCard";
import { useState } from "react";
// import SavingCard from "../Components/SavingCard";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function SavingCard({amount,dev,sdev,mean})
{

  var c="#00BFFF"


  var deviation
  if(amount>=mean+sdev)
  deviation=<Text style={{fontSize:20,color:"red"}}>{dev}%</Text>
  else if(amount<=mean-sdev)
  deviation=<Text style={{fontSize:20,color:"green"}}>{dev}%</Text>
  else
  deviation=<Text style={{fontSize:20,color:"orange"}}>{dev}%</Text>
    


  return(
    <View style={{flex:1,flexDirection:"column"}}>
      
      <View style={{display:"flex",flexDirection:"row",padding:10,backgroundColor:c,margin:10,borderRadius:20}}>
        <View style={{flex:1,padding:3,margin:1,backgroundColor:"c"  ,justifyContent:"center"}}> <Text style={{fontSize:20,color:"white"}}>Expense Amt: {amount}</Text></View>
        <View style={{flex:1,padding:3,margin:1,backgroundColor:"c" ,justifyContent:"center",fontSize:20,color:"white"}}>Deviation: {deviation}</View>
      </View>
    
    </View>
  )
}