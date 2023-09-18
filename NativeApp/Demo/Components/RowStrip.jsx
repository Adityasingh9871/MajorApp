import { StyleSheet,Text,View,Button } from "react-native";

export default function RowStrip({name,price,c})
{
    // const name="caso";

    return(
        <View style={styles.container}>
            <View  style={[styles.box,{flex:.3,backgroundColor:c,borderRadius:5}]} />
            <View  style={[styles.box,{flex:8,backgroundColor:"white"}]} >
                <Text style={styles.text}>{name}</Text>
            </View>
            <View  style={[styles.box,{flex:4,backgroundColor:"white"}]}>
                <Text style={styles.text}>${price}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2, 
        margin:.1
    },
    box:{
        height:50,
        justifyContent:"center",
        alignItems:"left",
        margin:1
        
    },
    text:{
        fontSize: 18,
        textTransform:"capitalize",
        padding:10
    }
    

})