import React from "react";

// Core Components
import { View, StyleSheet } from "react-native";

// Libraries
import MapView from "react-native-maps";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        showsUserLocation={true}
        followsUserLocation={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default HomePage;
