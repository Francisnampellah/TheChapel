import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { scheme } from "../../App";

export default function LiveTv() {
  return (
    <View style={styles.tvKontainer}>
      <MaterialIcons name="connected-tv" size={150} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  tvKontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
