// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { scheme } from "../../App";

// export default function Testimony() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Artical"
//         component={Artical}
//         options={{
//           tabBarLabel: () => {
//             return null;
//           },
//           tabBarIcon: ({ focused }) => (
//             <FontAwesome5
//               name={"newspaper"}
//               size={20}
//               color={
//                 focused == true ? "blue" : scheme == "dark" ? "white" : "black"
//               }
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="FavArtical"
//         component={FavArtical}
//         options={{
//           tabBarLabel: () => {
//             return null;
//           },
//           tabBarIcon: ({ focused }) => (
//             <FontAwesome5
//               name={"heart"}
//               size={20}
//               color={
//                 focused == true ? "blue" : scheme == "dark" ? "white" : "black"
//               }
//             />
//           ),
//         }}
//       />

//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({});

// const Tab = createMaterialTopTabNavigator();

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5,Ionicons } from "@expo/vector-icons";
import { scheme } from "../../App";
import React, { useState } from "react";
import FavArtical from "./testmony/FavArtical";
import Artical from "./testmony/Artical";

const Testimony = () => {
  const [TestimonyId, setTestimonyId] = useState(1);

  const testmonyContent = (param) => {
    switch (param) {
      case 1:
        return <Artical />;
        break;
      case 2:
        return <FavArtical />;
        break;
      default:
        return <Artical />;
    }
  };

  return (
    <View style={styles.testmonyKontainer}>
      <View style={styles.testmonyTopTab}>
        <TouchableOpacity
          style={TestimonyId == 1 ? styles.topTabActive : styles.topTab}
          onPress={() => setTestimonyId(1)}
        >
          <Ionicons
            name={"newspaper"}
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
            name={"heart"}
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

export default Testimony;

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
