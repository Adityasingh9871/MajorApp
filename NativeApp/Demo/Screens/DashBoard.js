import { StyleSheet,Text,View } from "react-native"
// import NavigationStrip from "../Components/NavigationStrip"

export default function DashBoard()
{
    return(
        <View style={styles.container}>
            <Text>DashBoard</Text>
            {/* <NavigationStrip /> */}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

})