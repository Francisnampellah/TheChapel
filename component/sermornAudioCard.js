import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { scheme } from "../App";
export default function SermonAudioCard() {
  return (
    <TouchableOpacity style={styles.sermonVidKontainer}>
      <Image
        resizeMode="cover"
        style={styles.videoImage}
        source={require("../assets/mic.jpg")}
      />

      <View style={styles.vidText}>
        <Text style={{ fontFamily: "Urban" }}>Title : AudioHead</Text>
        <Text style={styles.vidDets} numberOfLines={2}>
          Determines how to resize the image when the frame doesn't match the
          raw image dimensions. Defaults
        </Text>
        <Text style={styles.vidDate}>sunday 20 Jul, 2023</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sermonVidKontainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: 10,
    marginVertical: 2.5,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: "space-evenly",
  },

  videoImage: {
    width: 50,
    height: 50,
    flex: 1,
    borderRadius: 10,
    alignSelf: "center",
  },

  vidText: {
    flex: 4,
    gap: 5,
  },

  downloadButton: {
    flex: 1,
    alignSelf: "center",
    paddingLeft: 10,
  },

  vidDets: {
    textAlign: "justify",
    alignContent: "center",
    fontFamily: "Ageo",
  },

  vidDate: { fontFamily: "SourceCode", fontSize: 12, alignSelf: "flex-end" },
});
