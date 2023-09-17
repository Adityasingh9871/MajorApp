import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartWithCenteredLabels extends React.PureComponent {

    constructor(props) {
        super(props);

        // You can access props here
        const { name, color } = props;

        this.state = {
            name,
            color,
        };
    }

    render() {

        const { name, color } = this.state;

        const data = name.map((name, index) => ({
            key: index + 1,
            amount: name[1], // You can adjust this value as needed
            svg: { fill: color[index] },
          }));

        // const data = [
        //     {
        //         key: 1,
        //         amount: 50,
        //         svg: { fill: '#600080' },
        //     },
        //     {
        //         key: 2,
        //         amount: 50,
        //         svg: { fill: '#9900cc' }
        //     },
        //     {
        //         key: 3,
        //         amount: 40,
        //         svg: { fill: '#c61aff' }
        //     },
        //     {
        //         key: 4,
        //         amount: 95,
        //         svg: { fill: '#d966ff' }
        //     },
        //     {
        //         key: 5,
        //         amount: 35,
        //         svg: { fill: '#ecb3ff' }
        //     }
        // ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
        )
    }

}

export default PieChartWithCenteredLabels