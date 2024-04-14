import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Screens/Home';
import DashBoard from './Screens/DashBoard';
import Register from './Screens/Register';
import MainHome from './Screens/MainHome';
import Plan from './Screens/Plan';

export default function App({navigation}) {

  const Stack=createNativeStackNavigator()
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerTitleAlign:"center",headerTintColor: 'white',headerTitleStyle:{color:"white"},headerStyle: { backgroundColor: "#0049B7" }}} >
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainHome" component={MainHome} options={{headerRight:()=>(<View style={{margin:10}}><Button onPress={()=>{alert("logout")}} title="LOGOUT" color="red" /></View>)}} />
        <Stack.Screen name="Plan" component={Plan}  />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
