import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

export default function VideoCard() {
  let scaleValue = new Animated.Value(0);

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2],
  });

  let transformStyle = {
    ...styles.vidKontainer,
    transform: [{ scale: cardScale }],
  };

  return (
    <TouchableOpacity>
      <Animated.View style={transformStyle}>
        <Image
          resizeMode="cover"
          style={styles.videoImage}
          source={require("../assets/videoPic.jpg")}
        />
        <Text style={styles.Headtitle}> Title : VideoHead </Text>
        <Text style={styles.vidText} numberOfLines={1}>
          Determines how to resize the image when the frame doesn't match the
          raw image dimensions. Defaults
        </Text>
      </Animated.View>

      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <FontAwesome5 color={"black"} size={13} name={"eye"} />
        <Text> 12</Text>
      </View> */}
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  vidKontainer: {
    width: Width * 0.8,
    height: 210,
    flexDirection: "column",
    padding: 5,
    gap: 5,
  },
  videoImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  vidText: {
    textAlign: "justify",
    paddingHorizontal: 5,
    fontFamily: "Ageo",
  },
  Headtitle: {
    fontFamily: "Urban",
  },
});
