import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import X from "../../data/data.json";
import SermonVideoCard from "../../component/sermonVideoCard";
import Search from "../../component/Search";
import ArticalCard from "../../component/ArticalCard";

const WindowWidth = Dimensions.get("window").width;

export default function Notification() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [up, setUp] = useState(true);

  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const { y } = event.nativeEvent.contentOffset;

    console.log(y);

    if (y < 10 || currentScrollY < prevScrollY) {
      setUp(true);
      console.log("User scrolled down");
    } else if (currentScrollY > prevScrollY) {
      setUp(false);
    }

    // Update the previous scroll position
    setPrevScrollY(currentScrollY);
  };
  const loading = false;
  return (
    <View style={styles.vidKontainer}>
      {/* {up == true ? (
        <View style={styles.searchBar}>
          <Search />
        </View>
      ) : (
        ""
      )} */}

      <View style={styles.latestVideo}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrolSermon}
          onScroll={handleScroll}
        >
          {loading && (
            <View>
              <ActivityIndicator size={"large"} color={"#000"} />
            </View>
          )}
          <View>
            {/* <View style={{ height: 50 }}></View> */}
            <Text style={{ fontFamily: "Poppins", fontSize: 24 }}>
              Latest Updates & Upcomming Events
            </Text>
            {X
              ? X.data.map((each) => {
                  return <ArticalCard />;
                })
              : ""}
          </View>
          <View>
            {/* <View style={{ height: 50 }}></View> */}
            <Text style={{ fontFamily: "Poppins", fontSize: 24 }}>
              This Week
            </Text>
            <Text></Text>
            {X
              ? X.data.map((each) => {
                  return <ArticalCard />;
                })
              : ""}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vidKontainer: {
    flex: 1,
    backgroundColor: "trasparent",
  },
  scrolSermon: {
    gap: 10,
  },
  searchBar: {
    backgroundColor: "rgba(230,230,230,0.9)",
    position: "absolute",
    zIndex: 1,
    width: "100%",
  },
  latestVideo: {
    paddingHorizontal: 10,
  },
});
