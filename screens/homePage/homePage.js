import React from "react";

// Core Components
import { View, Text } from "react-native";

// Libraries
import MapView, { Marker } from "react-native-maps";
import useQuery from "@hybris-software/use-query";
import { Ionicons } from "@expo/vector-icons";

// Data
import endPoints from "../../data/endPoints";
import { DEFAULT_MAP_COORDINATES } from "../../data/constants";

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

  // Functions
  const IconBasedOnCategory = (category) => {
    switch (category) {
      case "HOTEL":
        return <Ionicons name="bed-sharp" size={40} color="#100684" />;
      case "MUSEUM":
        return (
          <Ionicons name="color-palette-sharp" size={40} color="#100684" />
        );
      case "MALL":
        return <Ionicons name="business-sharp" size={40} color="#100684" />;
      default:
        return <Ionicons name="location-sharp" size={40} color="#100684" />;
    }
  };

  const firstLocation = getNewAPI?.response?.data?.results?.[0];
  const initialRegion = firstLocation
    ? {
        latitude: parseFloat(firstLocation?.latitude),
        longitude: parseFloat(firstLocation?.longitude),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : DEFAULT_MAP_COORDINATES;

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
          initialRegion={initialRegion}
        >
          {getNewAPI?.response?.data?.results?.map((location) => {
            return (
              <Marker
                key={location?.id}
                coordinate={{
                  latitude: parseFloat(location?.latitude),
                  longitude: parseFloat(location?.longitude),
                }}
                title={location?.name}
                description={location?.description}
              >
                {IconBasedOnCategory(location?.category)}
              </Marker>
            );
          })}
        </MapView>
      )}
    </View>
  );
};

export default HomePage;
