import React, { useRef } from "react";

// Core Components
import { View, Text, ActivityIndicator } from "react-native";

// Libraries
import MapView, { Marker } from "react-native-maps";
import useQuery from "@hybris-software/use-query";
import { Ionicons } from "@expo/vector-icons";
import AuthRoute from "../../vendors/Components/AuthRoute";

// Data
import endPoints from "../../data/endPoints";
import { BIRD_EYE_VIEW } from "../../data/constants";

// Styles
import styles from "./styles";

const HomePage = ({ navigation }) => {
  // Refs
  const map = useRef();

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

  const fitAllMarkers = () => {
    map.current.fitToCoordinates(getNewAPI?.response?.data?.results, {
      edgePadding: {
        top: 20,
        right: 100,
        bottom: 10,
        left: 100,
      },
      animated: true,
    });
  };

  return (
    <AuthRoute
      minimumLoadingTime={100}
      loader={
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#aaa" />
        </View>
      }
      forLoggedUser={true}
      action={() => {
        navigation.navigate("Login");
      }}
    >
      <View style={styles.container}>
        {getNewAPI.isError ? (
          <Text>Error</Text>
        ) : getNewAPI?.isLoading ? (
          <Text>Loading</Text>
        ) : (
          // Display the map with markers
          <MapView
            ref={map}
            style={styles.map}
            provider="google"
            initialRegion={BIRD_EYE_VIEW}
            showsUserLocation={true}
            followsUserLocation={true}
            onMapReady={fitAllMarkers}
            onMapLoaded={fitAllMarkers}
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
                  identifier={`id${location?.id}`}
                  description={location?.description}
                >
                  {IconBasedOnCategory(location?.category)}
                </Marker>
              );
            })}
          </MapView>
        )}
      </View>
    </AuthRoute>
  );
};

export default HomePage;
