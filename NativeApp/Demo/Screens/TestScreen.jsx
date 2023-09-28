import { Text,Button,View,StyleSheet,Image,Dimensions, FlatList,SafeAreaView, ScrollView } from "react-native"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import GoalCard from "../Components/GoalCard";
import { useState } from "react";
import { useEffect } from "react";
import SavingCard from "../Components/SavingCard";

export default function TestScreen()
{
    const [salary,setsalary] = useState(1000);
    const [amount,setamount] = useState(25000);
    const [time,settime] = useState(0);

    const [lis,setlis]=useState([])

    const sum1=(x)=>{
      var s=0
      x.forEach(x=>{
        s+=x
      })

      return s
    }

    useEffect(()=>{
      setamount(amount-sum1(lis))
      var x=amount/(salary*12)
      settime(x.toPrecision(2))
    },[lis])
    
    const onADD=()=>{
      setlis(prev=>[...prev,1000])
    }

    console.log(lis)

    return(
      <SafeAreaView>
        <View style={styles.container}>
          <GoalCard salary={salary} remamount={amount} remtime={time} />
          <FlatList 
          data={lis}
          renderItem={({x})=><SavingCard amount={x} />}
          />
          <Button onPress={onADD}  title="ADD" />
        </View>
      </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  img:{
    resizeMode:"contain"
  },
  container:{
    display:"flex",
    justifyContent:"space-between",
    // height:windowHeight

  },
  box1:{
    flex:5,
    // backgroundColor:"white",
    display:"flex",
    flexDirection:"column"
  },
  box2:{
    flex:1,
    // backgroundColor:"blue"
  },
  t1:{
    flex:2,
    // backgroundColor:"red",
    justifyContent:"space-around",
    
  },
  t2:{
    flex:4,
    // backgroundColor:"yellow",
    justifyContent:"flex-end",
    fontSize:18
  },
  t3:{
    flex:2,
    // backgroundColor:"brown"
  }



})