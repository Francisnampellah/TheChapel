import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

export default function BookCard() {
  return (
    <TouchableOpacity style={styles.vidKontainer}>
      <Image
        resizeMode="cover"
        style={styles.videoImage}
        source={require("../assets/bookCover.jpg")}
      />
      <Text style={{ fontFamily: "Urban" }}>Title : BookHead</Text>
      <Text style={styles.vidText} numberOfLines={2}>
        Determines how to resize the image when the frame doesn't match the raw
        image dimensions. Defaults
      </Text>
      <View style={styles.bttns}>
        {/* <Button
          title="Buy"
          color="green"
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <View>
          <Button
            title="Buy"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function BookCardBuy() {
  return (
    <TouchableOpacity style={styles.vidKontainer}>
      <Image
        resizeMode="cover"
        style={styles.videoImage}
        source={require("../assets/bookCover.jpg")}
      />
      <Text style={{ fontFamily: "Urban" }}>Title : BookHead</Text>
      <Text style={styles.vidText} numberOfLines={2}>
        Determines how to resize the image when the frame doesn't match the raw
        image dimensions. Defaults
      </Text>
      <View style={styles.bttns}>
        {/* <Button
          title="Buy"
          color="green"
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <View>
          <Button
            title="Preview"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  vidKontainer: {
    width: Width * 0.4,
    height: 450,
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
  bttns: {
    justifyContent: "space-evenly",
  },
});
