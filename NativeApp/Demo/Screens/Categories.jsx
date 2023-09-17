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
        <View >
            <Chart2 name={data.slice(1)} color={colors} />
            <ScrollView>
            {
                data.slice(1).map((x,i)=>(
                    <View key={i}>
                    <RowStrip name={x[0]} price={x[1]} c={colors[i]} />
                    </View>
                ))
            }
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            <RowStrip name={"date"} price={"1"} c={'#18f2bf'} />
            </ScrollView>

            {/* <RowStrip />
            <RowStrip />
            <RowStrip /> */}
        </View>
    )
}

// const styles=StyleSheet.create({
//     container:{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//     },

// })