import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

export default function CategoriesCard() {
  return (
    <TouchableOpacity style={styles.vidKontainer}>
      <Image
        resizeMode="cover"
        style={styles.videoImage}
        source={require("../assets/church.jpg")}
      />
      <Text style={{ fontFamily: "Urban" }}>Title : CatergoryTitle</Text>
      <Text style={styles.vidText} numberOfLines={2}>
        Determines how to resize the image when the frame doesn't match the raw
        image dimensions. Defaults
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  vidKontainer: {
    width: Width * 0.42,
    height: 300,
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
    fontFamily: "Ageo",
  },
});
