import React from "react";

// Core Components
import { View } from "react-native";

// Libraries
import MapView from "react-native-maps";

// Styles
import styles from "./styles";

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

export default HomePage;
