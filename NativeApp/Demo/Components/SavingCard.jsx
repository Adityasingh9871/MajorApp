import {View,Text,StyleSheet,Dimensions} from "react-native"
const windowidth=Dimensions.get("window").width
const windowheight=Dimensions.get("window").height

export default function SavingCard({amount})
{

    return(
        <View style={styles.container}>
            <View style={styles.box1}><Text style={{fontSize:28,textAlign:"right",padding:10}}>Saving</Text></View>
            <View style={styles.box3}>
                <View style={{flex:5,justifyContent:"space-around",padding:10}}><Text style={{textAlign:"left",fontSize:23,color:"black"}}>Saving Amount: {amount}</Text></View>
                {/* <View style={{flex:1,backgroundColor:"yellow"}}></View> */}
            </View>
        </View>
    )
}

const styles=StyleSheet.create(
{
    container:{
        margin:10,
        display:"flex",
        height:windowheight*.1,
        // width:"80%",
        // backgroundColor:"green",
        // borderRadius:10
    },
    box1:{
        flex:1,
        // backgroundColor:"red",
        justifyContent:"space-around",
        
    },
    box2:{
        flex:2,
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"blue",
        fontSize:28
    },
    box3:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"blue",
        fontSize:28
    },
    remAmount:{
        flex:2,
        // backgroundColor:"blue",
        justifyContent:"space-around"
    },
    remTime:{
        // backgroundColor:"yellow",
        flex:1,
        justifyContent:"space-around"

    }



}
)