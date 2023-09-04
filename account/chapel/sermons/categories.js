import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CategoriesCard from "../../../component/CategoriesCard";
import X from "../../../data/data.json";
import Search from "../../../component/Search";

const WindowWidth = Dimensions.get("window").width;

export default function Video() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [up, setUp] = useState(true);

  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const { y } = event.nativeEvent.contentOffset;

    if (y < 10 || currentScrollY < prevScrollY) {
      setUp(true);
    } else if (currentScrollY > prevScrollY) {
      setUp(false);
    }

    // Update the previous scroll position
    setPrevScrollY(currentScrollY);
  };
  const loading = false;
  return (
    <View style={styles.vidKontainer}>
      {up == true ? (
        <View style={styles.searchBar}>
          <Search />
        </View>
      ) : (
        ""
      )}

      <View style={styles.latestVideo}>
        <ScrollView
          horizontal={false}
          style={styles.scrolSermon}
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
        >
          {loading && (
            <View>
              <ActivityIndicator size={"large"} color={"#000"} />
            </View>
          )}
          <View>
            <View style={{ height: 50 }}></View>
            <View style={styles.CatList}>
              {X
                ? X.data.map((each) => {
                    return <CategoriesCard />;
                  })
                : ""}
            </View>
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
    backgroundColor: "rgba(255,255,255,0.9)",
    position: "absolute",
    zIndex: 1,
    width: "100%",
  },
  latestVideo: {
    paddingHorizontal: 10,
  },
  CatList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});
