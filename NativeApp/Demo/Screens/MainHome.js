import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashBoard from './DashBoard';
import TestScreen from './TestScreen';
import Categories from '../Screens/Categories';

export default function MainHome() {

  const Stack=createNativeStackNavigator()
  const Tab = createMaterialBottomTabNavigator();

  return (
    // <NavigationContainer>
      <Tab.Navigator initialRouteName='dashboard' screenOptions={{headerTitleAlign:"center",headerStyle: { backgroundColor: "white" }}} >
        <Tab.Screen name="TestScreen" component={TestScreen} />
        <Tab.Screen name="DashBoard" component={DashBoard} />
        
        <Tab.Screen name="Category" component={Categories} />
      </Tab.Navigator>
    // </NavigationContainer>
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
