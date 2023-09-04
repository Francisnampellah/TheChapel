import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../chapel/home";
import Sermon from "../chapel/sermon";
import Testmony from "../chapel/testmony";
import LiveTv from "../chapel/liveTv";
import { scheme } from "../../App";
import { FontAwesome5 } from "@expo/vector-icons";
import Eshop from "../chapel/Eshop";

const Tab = createBottomTabNavigator();

console.log(scheme);

const Ikon = (iconName, focused) => {
  return (
    <FontAwesome5
      name={iconName}
      size={15}
      color={focused == true ? "blue" : scheme == "dark" ? "white" : "black"}
    />
  );
};

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "Poppins",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={"home"}
              size={15}
              color={
                focused == true ? "blue" : scheme == "dark" ? "white" : "black"
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sermon"
        component={Sermon}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={"bible"}
              size={15}
              color={
                focused == true ? "blue" : scheme == "dark" ? "white" : "black"
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Testimony"
        component={Testmony}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={"microphone"}
              size={15}
              color={
                focused == true ? "blue" : scheme == "dark" ? "white" : "black"
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Eshop"
        component={Eshop}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={"store"}
              size={15}
              color={
                focused == true ? "blue" : scheme == "dark" ? "white" : "black"
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
