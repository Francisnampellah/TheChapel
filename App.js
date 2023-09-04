import "react-native-gesture-handler";

import { StyleSheet, View } from "react-native";
import Account from "./account/Account";
import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";

import * as Font from "expo-font";

export const scheme = "";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    Urban: require("./assets/fonts/Urbanist/static/Urbanist-SemiBold.ttf"),
    Ageo: require("./assets/fonts/ageo-personal-use-family/AgeoPersonalUse-Light.otf"),
    Syne: require("./assets/fonts/Syne/static/Syne-Regular.ttf"),
    SourceCode: require("./assets/fonts/Source_Code_Pro/static/SourceCodePro-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Account />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
