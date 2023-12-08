import React from "react";

// Core Components
import { View, FlatList } from "react-native";

// UI Components
import NewsCard from "../../components/ui/newsCard/newsCard";

// Libraries
import useQuery from "@hybris-software/use-query";

// Data
import endPoints from "../../data/endPoints";

// Styles
import styles from "./styles";

const News = () => {
  // Queries
  const getNewAPI = useQuery({
    url: "http://10.101.12.97:8007/api/v1/news/",
    executeImmediately: true,
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <View style={styles.container}>
      {getNewAPI.response && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={getNewAPI?.response?.data}
          renderItem={({ item, index }) => <NewsCard post={item} />}
          style={styles.list}
        />
      )}
    </View>
  );
};

export default News;
