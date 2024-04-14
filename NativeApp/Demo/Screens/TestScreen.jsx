import {View, Text, Dimensions, Button, FlatList, Modal, TextInput, ScrollView} from "react-native"
import GoalCard from "../Components/GoalCard";
import { useState } from "react";
import SavingCard from "../Components/SavingCard";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function getDeviation(mat){
  var ans=[]
  ans.push(0)
  for(var i=1;i<mat.length;i++)
  {
    var t=(mat[i]-mat[i-1])/mat[i-1]
    ans.push(t)
  }

  return ans
}

function getMean(mat){
  var ans=[]
  for(var i=0;i<mat.length;i++)
  {
    var s=0
    for(var j=0;j<mat[i].length;j++)
    {
      s+=mat[i][j]
    }
    ans.push(s/mat[i].length)
  }
  return ans
}

function standardDev(arr)
  {
    let mean=arr.reduce((acc,curr)=>{
      return acc+curr
    },0)/arr.length

    arr=arr.map((k)=>{
      return (k-mean)**2
    })

    let sum=arr.reduce((acc,curr)=>acc+curr,0)
    let variance=sum/arr.length
    return Math.sqrt(sum/arr.length)
  }

export default function TestScreen()
{
  const [ModalVis,setModalVis]=useState(false)
  const [CurrNum,setCurrNum]=useState(0)
  const [data,setdata]=useState([])
  const [dataMap,setdataMap]=useState([])
  const [sdev,setsdev]=useState(0)
  const [mean,setmean]=useState(0)

  const [listItems, setListItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
  ]);

  var c="#0073CF"

  
  const HandleADD=()=>{
    console.log("clicked")
    // setModalVis(true)

    var temparr=[]
    for(var i=0;i<4;i++)
      temparr.push(Math.floor(Math.random()*150))

    var temp=data
    temp.push(temparr)
    setdata(temp)

    var meanMatrix=getMean(data)
    let mean=meanMatrix.reduce((acc,curr)=>{
      return acc+curr
    },0)/meanMatrix.length

    var Std_Dev=standardDev(meanMatrix)
    setsdev(Std_Dev)
    setmean(mean)
    var deviation=getDeviation(meanMatrix)

    var t=[]
    for(var i=0;i<meanMatrix.length;i++)
    t.push([meanMatrix[i].toPrecision(2),deviation[i].toPrecision(2)*100])
    // console.log("t",t)
    setdataMap(t)
      
  }

  const closeModal=()=>{
    setModalVis(false)
  }


  return(
    <View style={{flex:1,flexDirection:"column"}}>
      
      {/*<View style={{display:"flex",flexDirection:"row",padding:10,backgroundColor:c,margin:10,borderRadius:20}}>*/}
      {/*  <View style={{flex:1,padding:3,margin:1,backgroundColor:"c"  ,justifyContent:"center"}}> <Text style={{fontSize:20,color:"white"}}>Expense Amount: </Text></View>*/}
      {/*  <View style={{flex:1,padding:3,margin:1,backgroundColor:"c" ,justifyContent:"center"}}><Text style={{fontSize:20,color:"white"}}>Deviation: </Text></View>*/}
      {/*</View>*/}

      <ScrollView>
        {listItems.map((item, index) => (
            <View key={index} style={{ padding: 10 }}>
              <Text>{item}</Text>
            </View>
        ))}
      </ScrollView>
    
    </View>
  )
}