import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Screens/Home';
import DashBoard from './Screens/DashBoard';
import Register from './Screens/Register';
import MainHome from './Screens/MainHome';

export default function App() {

  const Stack=createNativeStackNavigator()
  const Tab = createMaterialBottomTabNavigator();
  // options={
  //   head
  // }
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerTitleAlign:"center",headerTitleStyle: {color:'white'},headerTintColor: 'white',headerTitleStyle:{color:"white"},headerStyle: { backgroundColor: "#0049B7" }}} >
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainHome" component={MainHome} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      {/* <Home /> */}
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
