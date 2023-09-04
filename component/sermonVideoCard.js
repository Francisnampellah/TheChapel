import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function SermonVideoCard() {
  return (
    <TouchableOpacity style={styles.sermonVidKontainer}>
      <Image
        resizeMode="cover"
        style={styles.videoImage}
        source={require("../assets/videoPic.jpg")}
      />

      <View style={styles.vidText}>
        <Text style={{ fontFamily: "Urban" }}>Title : VideoHead</Text>
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
  },

  videoImage: {
    width: 100,
    height: 100,
    flex: 1,
    borderRadius: 10,
  },

  vidText: {
    minHeight: 100,
    flex: 2,
    justifyContent: "space-evenly",
  },

  vidDets: { textAlign: "justify", alignContent: "center", fontFamily: "Ageo" },

  vidDate: {
    alignSelf: "flex-end",
    verticalAlign: "bottom",
    fontFamily: "SourceCode",
    fontSize: 12,
  },
});
