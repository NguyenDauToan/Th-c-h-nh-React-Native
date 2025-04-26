import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Project1 from './lab1/Project1';
import Project2 from './lab1/Project2';
import Project3 from './lab1/Project3';
import Project4 from './lab1/Project4';
import Project5 from './lab1/Project5';
import Project6 from './lab1/Project6';
import Project7 from './lab1/Project7';
import Project8 from './lab1/Project8';
import Calculator from './lab1_phan2/Calculator';
import Main from './lab1/Main';
import DrawerNavigator from './lab2/Screen/lastScreen';
import Options from './lab2/Screen/Options';

import store from './lab2/sharing/store';
import "react-native-gesture-handler";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens'; // 🆕 thêm dòng này

enableScreens(); // 🆕 gọi enableScreens ở đây

const Stack = createNativeStackNavigator();

function DrawerScreens() {
  return (
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
          <Stack.Screen name="Calculator" component={Calculator} />
          <Stack.Screen name="Lab2" component={DrawerNavigator} options={{headerShown: false}} />
          <Stack.Screen name="Options" component={Options} />
        </Stack.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerScreens />
      </NavigationContainer>
    </Provider>
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
