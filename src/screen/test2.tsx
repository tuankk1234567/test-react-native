import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData, getData } from "../storage/storage";
import { useNavigation } from "@react-navigation/native";
export default function Test2Screen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
            <Button
        onPress={() => {
          navigation.navigate("MainScreen");
        }}
        title="Đến trang test"
      />
    </View>
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
