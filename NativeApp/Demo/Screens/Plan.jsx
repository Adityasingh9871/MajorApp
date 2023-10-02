import {View,Text,Dimensions,Button,FlatList,Modal,TextInput} from "react-native"
import GoalCard from "../Components/GoalCard";
import { useEffect, useState } from "react";
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

  function formatData()
  {
    let formatter=Intl.NumberFormat('en',{notation:"compact"})
    let million=formatter.format(1e6)
    // console.log(million)
  }

  function getTime(Std_Dev,mean,goal)
  {
    console.log(mean,goal)
    var t=goal/mean

    var fans=t/12
    return fans

  }
export default function Plan()
{
  const [salary,setsalary]=useState(200)
  const [goal,setgoal]=useState(2000)
  const [time,settime]=useState(((goal/(salary*.7))/12).toPrecision(3))
  const [ModalVis,setModalVis]=useState(false)
  const [CurrNum,setCurrNum]=useState(0)
  const [data,setdata]=useState([])
  const [dataMap,setdataMap]=useState([])
  const [sdev,setsdev]=useState(0)
  const [mean,setmean]=useState(salary*.5)
  const [target,settarget]=useState(0)
  var c="#0073CF"

  useEffect(()=>{
    var t=(goal/(salary-mean))/12
    settime(t.toPrecision(2))
  },[goal])
  
  const HandleADD=()=>{
    console.log("clicked")

    var temparr=[]
    for(var i=0;i<4;i++)
      temparr.push(Math.floor(Math.random()*25))

    console.log("week data",temparr)
    var weekSum=temparr.reduce((s,curr)=> {return curr+s},0)
    setgoal(goal-weekSum)
    settarget(target+weekSum)
    console.log("target",target)
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
    t.push([meanMatrix[i].toPrecision(3),deviation[i].toPrecision(3)*100])

    setdataMap(t)

    // var NewTime=getTime(Std_Dev,mean,goal)
    // settime(NewTime.toPrecision(1))
      
  }

  const closeModal=()=>{
    setModalVis(false)
  }

  formatData()


  return(
    <View style={{flex:1,flexDirection:"column"}}>
    
    <GoalCard M_Salary={salary} R_Goal={goal} R_Time={time} />

    <FlatList 
          data={dataMap}
          renderItem={(x)=><SavingCard amount={x.item[0]} dev={x.item[1]} sdev={sdev} mean={mean}/>}
    />

    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Modal
          animationType='fade'
          transparent={false}
          visible={ModalVis}
          onRequestClose={()=>{console.log("closed")}}
      >

      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <TextInput style={{width:"70%",height:50,margin:20}} onChangeText={setCurrNum}  placeholder="number" keyboardType="numeric" />
          <Button title='close' onPress={closeModal} />
      </View>
      </Modal>
    </View>

    <View style={{alignSelf:"flex-end",position:"absolute",bottom:10,right:20,borderRadius:20}}>
      <Button title="+" onPress={HandleADD} />
    </View>

    </View>
  )
}