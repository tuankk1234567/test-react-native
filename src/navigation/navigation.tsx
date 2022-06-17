import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screen/mainScreen";
import TestScreen from "../screen/testScreen";
import Test3Screen from "../screen/test2";
import {MyTabs} from "../navigation/bottomTab"
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"




export default function Navigator() {
  const Stack = createNativeStackNavigator();


 

  return (
    
    <NavigationContainer>
      <Stack.Navigator       
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }} initialRouteName="Test2Screen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="Test3Screen" component={Test3Screen} />
        <Stack.Screen name="Test2Screen" component={MyTabs} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
