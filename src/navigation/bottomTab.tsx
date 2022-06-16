import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet } from "react-native"
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import MainScreen from "../screen/mainScreen";
import TestScreen from "../screen/testScreen";

const BottomTabs = createBottomTabNavigator()

const MyTabs  =() => {
    return (
      <BottomTabs.Navigator
        initialRouteName="MainScreen"
      >
        <BottomTabs.Screen
          key={`MainScreen`}
          name={`MainScreen`}
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              // @ts-ignore
              <AntDesign name="home" color={color} size={size}/>
            ),

          }}
        />
        <BottomTabs.Screen
          key={`TestScreen`}
          name={`TestScreen`}
          component={TestScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              // @ts-ignore
              <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={size}/>
            ),

          }}
        />
      </BottomTabs.Navigator>
    );
  }

  export {MyTabs}