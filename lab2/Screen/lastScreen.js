import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Contacts from "./Contast"; 
import Profile from "./Profile";
import Favorites from "./Favorite";
import User from "./User";
import colors from "../utility/colors";
import Options from "./Options";
import { createDrawerNavigator } from "@react-navigation/drawer";

const getDrawerItemIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
  );

const getTabBarIcon = icon => ({ color }) => (
  <MaterialIcons name={icon} size={26} color={color} />
);

const Stack = createNativeStackNavigator();

const ContactsScreens = () => (
  <Stack.Navigator
    initialRouteName="Contacts"
    screenOptions=
    {{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
      headerTitleAlign: 'center',
      
    
    }}
  >
    <Stack.Screen name="Contacts" component={Contacts} options={{ title: "Contacts",headerShown: false }}  />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ route }) => {
        const { contact } = route.params;
        const { name } = contact;
        return {
          title: name.split(' ')[0],
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue,
          },
        };
      }}
    />
  </Stack.Navigator>
);

const FavoritesScreens = () => (
  <Stack.Navigator initialRouteName="Favorites">
    <Stack.Screen name="Favorites" component={Favorites} options={{ title: "Favorites", headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
  </Stack.Navigator>
);

const UserScreens = ({navigation}) => {
  return(
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen name="User" component={User} 
      options={{
        headerTitle:"Me",
        headerTintColor:"white",
        headerStyle:{
          backgroundColor: colors.blue,
        },
        headerRight: ()=>(
          <MaterialIcons 
          name="settings"
          size={24}
          style ={{color:"white", marginRight:10}}
          onPress={()=> navigation.navigate('Options')}/>
        )
      }}/>
      <Stack.Screen name='Options' component={Options} options={{title:"Options"}}/>
    </Stack.Navigator>
  )

}
  
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='ContactsScreens'>
      <Drawer.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          drawerIcon: getDrawerItemIcon('list'),
        }}
      />
      <Drawer.Screen
        name="FavoritesScreens"
        component={FavoritesScreens}
        options={{
          drawerIcon: getDrawerItemIcon('star'),  // typo: 'start' → 'star'
        }}
      />
      <Drawer.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          drawerIcon: getDrawerItemIcon('person'),
        }}
      />
    </Drawer.Navigator>
  );
};


const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
      initialRouteName="ContactsScreens"
      barStyle={{ backgroundColor: colors.blue }}
      labeled={false}
    >
      <Tab.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          tabBarIcon: getTabBarIcon('list'),
        }}
      />
      <Tab.Screen
        name="FavoritesScreens"
        component={FavoritesScreens}
        options={{
          tabBarIcon: getTabBarIcon('star'),
        }}
      />
      <Tab.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          tabBarIcon: getTabBarIcon('person'),
        }}
      />
    </Tab.Navigator>
  );
  

  export default DrawerNavigator
