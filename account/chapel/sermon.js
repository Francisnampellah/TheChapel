// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import Audio from "./sermons/audio";
import Video from "./sermons/video";
import Favorate from "./sermons/favorate";
import Downloads from "./sermons/downloads";
import Categories from "./sermons/categories";
import { FontAwesome5 } from "@expo/vector-icons";
import { scheme } from "../../App";
import React, { useState } from "react";

const Sermon = () => {
  const [sermonId, setSermonId] = useState(1);

  const SermonContent = (param) => {
    switch (param) {
      case 1:
        return <Video />;
        break;
      case 2:
        return <Audio />;
        break;
      case 3:
        return <Favorate />;
        break;
      case 4:
        return <Categories />;
        break;
      case 5:
        return <Downloads />;
        break;
      default:
        return <Video />;
    }
  };

  return (
    <View style={styles.sermonKontainer}>
      <View style={styles.sermonTopTab}>
        <TouchableOpacity
          style={sermonId == 1 ? styles.topTabActive : styles.topTab}
          onPress={() => setSermonId(1)}
        >
          <FontAwesome5
            name={"video"}
            size={15}
            color={
              scheme == "dark" ? "white" : sermonId == 1 ? "blue" : "black"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={sermonId == 2 ? styles.topTabActive : styles.topTab}
          onPress={() => setSermonId(2)}
        >
          <FontAwesome5
            name={"music"}
            size={15}
            color={
              scheme == "dark" ? "white" : sermonId == 2 ? "blue" : "black"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={sermonId == 3 ? styles.topTabActive : styles.topTab}
          onPress={() => setSermonId(3)}
        >
          <FontAwesome5
            name={"heart"}
            size={15}
            color={
              scheme == "dark" ? "white" : sermonId == 3 ? "blue" : "black"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={sermonId == 4 ? styles.topTabActive : styles.topTab}
          onPress={() => setSermonId(4)}
        >
          <FontAwesome5
            name={"th"}
            size={15}
            color={
              scheme == "dark" ? "white" : sermonId == 4 ? "blue" : "black"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={sermonId == 5 ? styles.topTabActive : styles.topTab}
          onPress={() => setSermonId(5)}
        >
          <FontAwesome5
            name={"download"}
            size={15}
            color={
              scheme == "dark" ? "white" : sermonId == 5 ? "blue" : "black"
            }
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 1 }}
        onTouchStart={(e) => (this.touchY = e.nativeEvent.pageX)}
        onTouchEnd={(e) => {
          if (this.touchY - e.nativeEvent.pageX > 20) console.log("Swiped up");
        }}
      >
        {SermonContent(sermonId)}
      </View>
    </View>
  );
};

export default Sermon;

const styles = StyleSheet.create({
  sermonKontainer: {
    flex: 1,
  },
  sermonTopTab: {
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

// export default function Sermon() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Video"
//         component={Video}
//         options={{
//           tabBarLabel: () => {
//             return null;
//           },
//           tabBarIcon: ({ focused }) => (
//             <FontAwesome5
//               name={"video"}
//               size={20}
//               color={
//                 focused == true ? "blue" : scheme == "dark" ? "white" : "black"
//               }
//             />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Audio"
//         component={Audio}
//         options={{
//           tabBarLabel: () => {
//             return null;
//           },
//           tabBarIcon: ({ focused }) => (
//             <FontAwesome5
//               name={"music"}
//               size={20}
//               color={
//                 focused == true ? "blue" : scheme == "dark" ? "white" : "black"
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorite"
//         component={Favorate}
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
//       <Tab.Screen
//         name="Catergories"
//         component={Categories}
//         options={{
//           tabBarLabel: () => {
//             return null;
//           },
//           tabBarIcon: ({ focused }) => (
//             <FontAwesome5
//               name={"th"}
//               size={20}
//               color={
//                 focused == true ? "blue" : scheme == "dark" ? "white" : "black"
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Downloads"
//         component={Downloads}
//         options={{
//           tabBarLabel: () => {
//             return null;
//           },
//           tabBarIcon: ({ focused }) => (
//             <FontAwesome5
//               name={"download"}
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
