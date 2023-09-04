import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import BottomNav from "./Screens/BottomNav";
import Notification from "./Screens/Notification";
import Setting from "./Screens/Setting";
import Profile from "./Screens/Profile";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomDrawer from "../component/CustomDrawer";

import { scheme } from "../App";

const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function Account() {
  const Icon = ({ focused, iconName }) => (
    <FontAwesome5 color={"black"} size={20} name={iconName} />
  );
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        initialRouteName="Chapel"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerTintColor:
            scheme === "dark" ? "rgb(128,128,128)" : "rgba(0,0,0,1)",
          drawerLabelStyle: {
            fontFamily: "Poppins",
          },
          headerTitleStyle: { fontFamily: "Poppins" },
        }}
      >
        <Drawer.Screen
          name="Chapel"
          component={BottomNav}
          options={{
            drawerIcon: ({ focused, iconName }) => (
              <Icon focused={focused} iconName={"church"} />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications & Events"
          component={Notification}
          options={{
            drawerIcon: ({ focused, iconName }) => (
              <Icon focused={focused} iconName={"envelope"} />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerIcon: ({ focused, iconName }) => (
              <Icon focused={focused} iconName={"wrench"} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ focused, iconName }) => (
              <Icon focused={focused} iconName={"user"} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
