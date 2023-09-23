import { Text,Button,View,StyleSheet,Image,Dimensions, FlatList,SafeAreaView, ScrollView } from "react-native"
import data1 from '../helpers/data'
import CategoriesComp from "../Components/CategoriesComp";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Categories()
{
    console.log(data1)
    return(
      <SafeAreaView>
        <FlatList
        data={data1}
        horizontal
        renderItem={({item})=><CategoriesComp name={item.data} color={item.colors} />}
        pagingEnabled={true}
        snapToAlignment="center"
         />
      </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  text:{
    // height:windowHeight
    fontSize:280
  },
})