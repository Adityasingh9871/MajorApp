import { Text,Button,View,StyleSheet,Image,Dimensions, FlatList,SafeAreaView, ScrollView } from "react-native"
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
import data1 from '../helpers/data'
import Chart2 from "../Components/Chart2"
import CategoriesComp from "../Components/CategoriesComp";

export default function TestScreen()
{


    
    
    return(
      <SafeAreaView>
        {/* <FlatList
        data={data1}
        horizontal
        renderItem={({item})=><CategoriesComp name={item.data.slice(1)} color={item.colors} />}
        // renderItem={()=><Text style={styles.text}>hello</Text>}
        // horizontal={true}
        pagingEnabled={true}
        snapToAlignment="center"
         />
        <Categories /> */}
      </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  text:{
    // height:windowHeight
    fontSize:280
  },
  UpperBox:{
    width:"100%",
    height:windowHeight*.3,
    backgroundColor:"blue",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  }

})