import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BookCard from "../../../component/BookCard";
import X from "../../../data/data.json";

const ECategories = () => {
  return (
    <ScrollView>
      <View style={styles.categoriesKontainer}>
        {X
          ? X.data.map((each) => {
              return <BookCard />;
            })
          : ""}
      </View>
    </ScrollView>
  );
};

export default ECategories;

const styles = StyleSheet.create({
  categoriesKontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 20,
  },
});
