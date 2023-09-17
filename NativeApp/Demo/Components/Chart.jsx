import { View,Text,StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useState } from "react";
import {Dimensions} from 'react-native';


export default function Chart()
{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const data = [
        {
          name: "Seoul",
          population: 215,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 280,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 853,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 119,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];

      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        useShadowColorFromDataset: false,
        // showLegend:false
      };
    return(
        <View>
            <PieChart data={data}   width={windowWidth} height={220} chartConfig={chartConfig} accessor="population" backgroundColor="transparent"  absolute />
        </View>
    )
}

