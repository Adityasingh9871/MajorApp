import { ScrollView,StyleSheet,Text,View,Dimensions, Button } from "react-native"
import { useEffect,useState } from "react"
import NavigationStrip from "./NavigationStrip"
import Chart2 from "./Chart2"
import RowStrip from "./RowStrip"
import {generateColor} from '../helpers/randomColor'

export default function Categories({name,color})
{   
    return(
        <View style={styles.Container} >
            <View><Text>{name[0][2]}</Text></View>

            <View style={styles.ChartContainer}>
                <Chart2 name={name.slice(1)} color={color} />
            </View>
            <View style={styles.DataContainer}>
                <ScrollView>
                    {
                        name.slice(1).map((x,i)=>(
                            <View key={i}>
                            <RowStrip name={x[0]} price={x[1]} c={color[i]} />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>


        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height
    },
    ChartContainer:{
        display:"flex",
        justifyContent: 'space-between',
        // alignItems:"center",
        padding:10,
        margin:10,
        // backgroundColor:"blue"
    },
    DataContainer:{
        padding:5,
        margin:1,
    },
    BottomStrip:{
        position: 'absolute', // Position the NavigationStrip absolutely at the bottom
        left: 0,
        right: 0,
        bottom: 0,
        margin:10
    }

})