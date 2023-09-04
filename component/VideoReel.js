import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

export default function VideoReel() {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        style={styles.videoImage}
        source={require("../assets/reels.jpg")}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.03)",
            "rgba(0,0,0,0.4)",
            "rgba(0,0,0,0.6)",
            "rgba(0,0,0,0.8)",
          ]}
          style={styles.viewText}
        >
          <Text style={styles.vidText} numberOfLines={4}>
            Determines how to resize the image when the frame doesn't match the
            raw image dimensions. Defaults
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  vidKontainer: {},
  videoImage: {
    flex: 1,
    width: 200,
    height: 300,
    flexDirection: "column",
    margin: 10,
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  vidText: {
    textAlign: "justify",
    color: "white",
    fontFamily: "Ageo",
  },
  viewText: {
    padding: 10,
    marginTop:10
  },
});
