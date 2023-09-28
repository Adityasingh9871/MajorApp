import {View,Text,StyleSheet,Dimensions} from "react-native"
const windowidth=Dimensions.get("window").width
const windowheight=Dimensions.get("window").height

export default function GoalCard({salary,remamount,remtime})
{

    return(
        <View style={styles.container}>
            <View style={styles.box1}><Text style={{fontSize:28,textAlign:"right",padding:10}}>Property</Text></View>
            <View style={styles.box2}>
                <View style={styles.remAmount}><Text style={{fontSize:38,textAlign:"center",padding:10}}>{remamount}</Text></View>
                <View style={styles.remTime}><Text style={{fontSize:28,textAlign:"center",padding:10}}>{remtime}yr</Text></View>
            </View>
            <View style={styles.box3}>
                <View style={{flex:5,justifyContent:"space-around",padding:10}}><Text style={{textAlign:"left",fontSize:23}}>Monthly salary: {salary}</Text></View>
                <View style={{flex:1}}></View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create(
{
    container:{
        margin:10,
        display:"flex",
        height:windowheight*.2,
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