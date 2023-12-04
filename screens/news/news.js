import React from "react";

// Core Components
import { View, Text, StyleSheet } from "react-native";

const News = () => {
  return (
    <View style={styles.container}>
      <Text>News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default News;
