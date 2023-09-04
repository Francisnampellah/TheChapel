import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { scheme } from "../App";
const Search = () => {
  const [text, onChangeText] = React.useState("Search ..");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView style={styles.searchKontainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity style={styles.flterIcon}>
        <FontAwesome5
          name={"filter"}
          size={20}
          color={scheme == "dark" ? "white" : "black"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 35,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: scheme == "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.3)",
    fontFamily: "Ageo",
  },
  searchKontainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  flterIcon: {
    alignSelf: "center",
    margin: 5,
  },
});

export default Search;
