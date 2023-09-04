import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { scheme } from "../App";

const Height = Dimensions.get("window").height;

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.headerBanner}
        source={require("../assets/weBelieve.jpg")}
      >
        {/* <View style={styles.bannerDetails}>
          <Image
            style={styles.profileImage}
            source={require("../assets/profile.png")}
          />
          <Text style={{ fontFamily: "Ageo" }}>User name</Text>
        </View> */}
      </ImageBackground>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.logOut}>
        <Button
          title="Donate"
          color="green"
          accessibilityLabel="Learn more about this purple button"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            margin: 20,
          }}
        >
          <Ionicons
            name={"exit"}
            size={20}
            color={scheme == "dark" ? "white" : "black"}
          />
          <Text style={{ fontFamily: "Ageo" }}>Log Out</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  headerBanner: {
    height: Height * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  logOut: {
    margin: 20,
    alignContent: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  bannerDetails: {
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
});
