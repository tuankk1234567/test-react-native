import * as React from "react"
import { ActivityIndicator, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"

export default function Loading() {


  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={"#36f"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    alignContent: "center",
    zIndex: 9999,
    backgroundColor: "#80808073",
  },
})
