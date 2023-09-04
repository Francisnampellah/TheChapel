import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import VideoCard from "../../component/VideoCard";
import AudioCard from "../../component/AudioCard";
import VideoReel from "../../component/VideoReel";
import Data from "../../data/data.json";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView
      style={styles.homeKontainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.latestVideo}>
        <Text style={styles.latestText}>Latest Video</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {loading && (
            <View>
              <ActivityIndicator size={"large"} color={"#000"} />
            </View>
          )}
          {Data
            ? Data.data.map((each) => {
                return <VideoCard />;
              })
            : ""}
        </ScrollView>
      </View>

      <View style={styles.latestAudio}>
        <Text style={styles.latestText}>Latest Audio </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {loading && (
            <View>
              <ActivityIndicator size={"large"} color={"#000"} />
            </View>
          )}
          {Data
            ? Data.data.map((each) => {
                return <AudioCard />;
              })
            : ""}
        </ScrollView>
      </View>

      <View style={styles.latestReels}>
        <Text style={styles.latestText}>Video Reels</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {loading && (
            <View>
              <ActivityIndicator size={"large"} color={"#000"} />
            </View>
          )}
          {Data
            ? Data.data.map((each) => {
                return <VideoReel />;
              })
            : ""}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeKontainer: {},
  latestVideo: {
    padding: 10,
    flex: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
  },
  latestText: {
    fontSize: 24,
    fontFamily: "Poppins",
  },
  scrollLatestAudio: {
    height: "auto",
    padding: 10,
  },
  latestAudio: {
    padding: 10,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
  },

  scrollLatestAudio: {
    height: "auto",
    padding: 10,
  },
  latestReels: {
    padding: 10,
  },
});
