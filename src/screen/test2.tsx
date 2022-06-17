import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Switch
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {changeBackground} from "../store/action/changeBackground/background"
import {changeUser} from "../store/action/user/userAction"
 
export default function Test2Screen() {
  const valueBackgroundColder = useSelector(state => state.backgroundScreen.backgroundColor);
  let check = useSelector(state => state.backgroundScreen.status);
  const userName = useSelector(state => state.user.user);
  let password = useSelector(state => state.user.password);

  const dispatch = useDispatch()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    check = !isEnabled
    setIsEnabled(check)
    
    const action = changeBackground(check)
    const action2 = changeUser({
      user:"user4",
      password: "password4"
    })
    dispatch(action)
    dispatch(action2)
  }

  console.log(valueBackgroundColder,check)
  console.log(userName,password)
  




  return(
  <SafeAreaView>
    <View style={{ backgroundColor: valueBackgroundColder}}>
  <Switch
        trackColor={{ false: "#d4d4d4", true: "#d4d4d4" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
});
