import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { BookCardBuy } from "../../../component/BookCard";
import X from "../../../data/data.json";

const ESubcribed = () => {
  return (
    <ScrollView>
      <View style={styles.categoriesKontainer}>
        {X
          ? X.data.map((each) => {
              return <BookCardBuy />;
            })
          : ""}
      </View>
    </ScrollView>
  );
};

export default ESubcribed;

const styles = StyleSheet.create({
  categoriesKontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 20,
  },
});
