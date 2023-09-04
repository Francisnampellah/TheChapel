import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { scheme } from "../../App";
import React, { useState } from "react";

import ECategories from "./Eshop/ECategories";
import ESubcribed from "./Eshop/ESubcribed";

const Eshop = () => {
  const [TestimonyId, setTestimonyId] = useState(1);

  const testmonyContent = (param) => {
    switch (param) {
      case 1:
        return <ECategories />;
        break;
      case 2:
        return <ESubcribed />;
        break;
      case 3:
        return <ESubcribed />;
        break;
      default:
        return <ECategories />;
    }
  };

  return (
    <View style={styles.testmonyKontainer}>
      <View style={styles.testmonyTopTab}>
        <TouchableOpacity
          style={TestimonyId == 1 ? styles.topTabActive : styles.topTab}
          onPress={() => setTestimonyId(1)}
        >
          <FontAwesome5
            name={"book"}
            size={15}
            color={
              scheme == "dark" ? "white" : TestimonyId == 1 ? "blue" : "black"
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={TestimonyId == 2 ? styles.topTabActive : styles.topTab}
          onPress={() => setTestimonyId(2)}
        >
          <FontAwesome5
            name={"download"}
            size={15}
            color={
              scheme == "dark" ? "white" : TestimonyId == 2 ? "blue" : "black"
            }
          />
        </TouchableOpacity>
      </View>
      {testmonyContent(TestimonyId)}
    </View>
  );
};

export default Eshop;

const styles = StyleSheet.create({
  testmonyKontainer: {
    flex: 1,
  },
  testmonyTopTab: {
    flexDirection: "row",
    height: 50,
    alignContent: "space-around",
    backgroundColor: "white",
    elevation: 20,
    shadowColor: "rgba(0,0,0,1)",
    zIndex: 1000,
  },
  topTab: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  topTabActive: {
    flex: 1,
    padding: 10,
    borderBottomColor: "blue",
    borderBottomWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
