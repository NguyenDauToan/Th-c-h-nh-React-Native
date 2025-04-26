import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Contacts from "./Contast"; // nếu bạn giữ tên là Contast thì không cần sửa
import Profile from "./Profile";
import Favorites from "./Favorite";
import User from "./User";
import colors from "../utility/colors";

const getTabBarIcon = icon => ({ color }) => (
  <MaterialIcons name={icon} size={26} color={color} />
);

const Stack = createNativeStackNavigator();

const ContactsScreens = () => (
  <Stack.Navigator
    initialRouteName="Contacts"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Contacts" component={Contacts} options={{ title: "Contacts" }} />
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
    <Stack.Screen name="Favorites" component={Favorites} options={{ title: "Favorites" }} />
    <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
  </Stack.Navigator>
);

const UserScreens = () => (
  <Stack.Navigator initialRouteName="User">
    <Stack.Screen name="User" component={User} />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();
// TabNavigator sẽ không bao gồm NavigationContainer
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
  

export default TabNavigator;
