import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { storeData, getData } from "../storage/storage";
import { useNavigation } from "@react-navigation/native";
import  Loading  from "../components/loading"
import BottomTabsScreen from "../navigation/bottomTab"
export default function MainScreen() {
  const [isLoading, setLoading] = useState(false)
  const navigation = useNavigation();
  useEffect(() => {
    fetchData()
  },[])
  const fetchData = async () => {
    setLoading(true)
    setTimeout(()=>{setLoading(false)},3000)
  }
  return (
    <>
    {isLoading && <Loading />}
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("TestScreen");
        }}
        title="Đến trang test"
      />

<Button
        onPress={() => {
          navigation.navigate("Test3Screen");
        }}
        title="Đến trang test 3"
      />

      <Button
        onPress={() => {
          storeData();
        }}
        title="create data"
      />

      <Button
        onPress={() => {
          getData();
        }}
        title="get data"
      />
      
    </View>
    </>
  );
}
<BottomTabsScreen/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
