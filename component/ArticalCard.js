import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { scheme } from "../App";
export default function ArticalCard() {
  return (
    <TouchableOpacity style={styles.articalKontainer}>
      <View style={styles.vidText}>
        <Text style={{ fontFamily: "Urban" }}>Title Head</Text>
        <Text style={styles.vidDets}>
          Determines how to resize the image when the frame doesn't match the
          raw image dimensions. Defaults
        </Text>
        <View style={styles.artcalDate}>
          <Text style={styles.vidDate}>sunday 20 Jul, 2023</Text>
          <FontAwesome5
            name={"heart"}
            size={15}
            color={scheme == "dark" ? "white" : "black"}
          />
        </View>
      </View>
      <Image
        resizeMode="cover"
        style={styles.videoImage}
        source={require("../assets/article.jpg")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  articalKontainer: {
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
    gap: 5,
    justifyContent: "space-evenly",
  },
  artcalDate: {
    flexDirection: "row",
    gap: 10,
  },
  vidDets: { textAlign: "justify", alignContent: "center", fontFamily: "Ageo" },

  vidDate: { verticalAlign: "bottom", fontFamily: "SourceCode", fontSize: 12 },
});
