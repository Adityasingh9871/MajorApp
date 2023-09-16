import { StyleSheet,Text,View,Button } from "react-native";

export default function NavigationStrip()
{
    return(
        <View style={styles.container}>
            <Button  title="A" />
            <Button  title="B" />
            <Button  title="B" />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10, 
    },
    

})