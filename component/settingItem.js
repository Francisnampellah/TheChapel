import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";

import { scheme } from "../App";

export default function DarkMode() {
  const [darkMode, setDarkmode] = useState(false);

  return (
    <View style={styles.DarkMode}>
      <Text style={styles.DarkModetext}>Dark Mode</Text>
      <View>
        <ToggleSwitch
          isOn={darkMode}
          onColor="black"
          offColor="gray"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="medium"
          onToggle={(isOn) => setDarkmode(!darkMode)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DarkMode: {
    margin: 5,
    padding: 10,
    borderRadius: 6,
    justifyContent: "space-between",
    gap: 5,
    padding: 20,
    flexDirection: "row",
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
  },
  DarkModetext: {
    fontFamily: "Poppins",
  },
});
