import React from "react";

// Core Components
import { View, Text } from "react-native";

// Libraries
import MapView, { Marker } from "react-native-maps";
import useQuery from "@hybris-software/use-query";

// Data
import endPoints from "../../data/endPoints";

// Styles
import styles from "./styles";

const HomePage = () => {
  // Queries
  const getNewAPI = useQuery({
    url: endPoints.maps.GET_MARKERS,
    executeImmediately: true,
    onSuccess: (response) => {},
    onError: (error) => {
      console.log("error", error);
    },
  });
  return (
    <View style={styles.container}>
      {getNewAPI.isError ? (
        <Text>Error</Text>
      ) : getNewAPI?.isLoading ? (
        <Text>Loading</Text>
      ) : (
        // Display the map with markers
        <MapView
          style={styles.map}
          provider="google"
          showsUserLocation={true}
          followsUserLocation={true}
        >
          {getNewAPI?.response?.data?.results?.map((location) => (
            <Marker
              key={location.id}
              coordinate={{
                latitude: parseFloat(location.latitude),
                longitude: parseFloat(location.longitude),
              }}
              title={location.name}
              description={location.description}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

export default HomePage;
