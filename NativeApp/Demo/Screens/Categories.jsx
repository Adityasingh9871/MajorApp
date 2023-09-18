import { ScrollView,StyleSheet,Text,View } from "react-native"
import NavigationStrip from "../Components/NavigationStrip"
import Chart2 from "../Components/Chart2"
import RowStrip from "../Components/RowStrip"


export default function Categories()
{
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
    const colors= ['#1536e0','#f9c8c3','#dc4e6c','#90e6b0','#18f2bf']

    return(
        <View style={styles.Container} >
            <View style={styles.ChartContainer}>
                <Chart2 name={data.slice(1)} color={colors} />
            </View>
            
            <View style={styles.DataContainer}>
                <ScrollView>
                    {
                        data.slice(1).map((x,i)=>(
                            <View key={i}>
                            <RowStrip name={x[0]} price={x[1]} c={colors[i]} />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>

            <View style={styles.BottomStrip}>
                {/* <NavigationStrip /> */}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
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