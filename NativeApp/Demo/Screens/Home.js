import { Text,View,Button } from "react-native"
export default function Home({navigation})
{
    return (
        <View>

            <Button title="Login"
            onPress={()=>navigation.navigate("DashBoard")}
            />
            <Button title="Register"
            onPress={()=>navigation.navigate("Register")}
            />
            
        </View>
    )
}