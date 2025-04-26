import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Project1 from './lab1/Project1';
import Project2 from './lab1/Project1';
import Project3 from './lab1/Project1';
import Project4 from './lab1/Project1';
import Project5 from './lab1/Project1';
import Project6 from './lab1/Project1';
import Project7 from './lab1/Project1';
import Project8 from './lab1/Project1';
import Calculator from './lab1_phan2/Calculator';
import TabNavigator from './lab2/Screen/lastScreen';
import "react-native-gesture-handler"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './lab1/Main';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Project1" component={Project1} />
        <Stack.Screen name="Project2" component={Project2} />
        <Stack.Screen name="Project3" component={Project3} />
        <Stack.Screen name="Project4" component={Project4} />
        <Stack.Screen name="Project5" component={Project5} />
        <Stack.Screen name="Project6" component={Project6} />
        <Stack.Screen name="Project7" component={Project7} />
        <Stack.Screen name="Project8" component={Project8} />
        <Stack.Screen name="Lab2" component={TabNavigator} options={{headerShown:false}} /> 
        <Stack.Screen name="Lab1_Phan2" component={Calculator} />

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