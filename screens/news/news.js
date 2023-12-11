import React, { useState } from "react";

// Core Components
import { View, FlatList, ActivityIndicator, Text } from "react-native";

// UI Components
import NewsCard from "../../components/ui/newsCard/newsCard";
import Button from "../../components/ui/Button/Button";

// Libraries
import useQuery from "@hybris-software/use-query";

// Data
import endPoints from "../../data/endPoints";

// Styles
import styles from "./styles";

const News = () => {
  const [page, setPage] = useState(1);
  // Queries
  const getNewAPI = useQuery({
    url: endPoints.news.GET_NEWS(page),
    executeImmediately: true,
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const fetchMoreData = () => {
    console.log(getNewAPI?.response?.data?.totalPages > page);
    if (getNewAPI?.response?.data?.totalPages > page) {
      setPage(page + 1);
      getNewAPI.executeQuery();
      console.log("ASDDDD");
    }
  };

  const renderHeader = () => <Text style={styles.title}>RN News</Text>;

  const renderFooter = () => (
    <View style={styles.footerText}>
      {getNewAPI.isLoading && <ActivityIndicator />}
      {getNewAPI.totalPages > page && (
        <Text>No more articles at the moment</Text>
      )}
    </View>
  );
  const renderEmpty = () => (
    <View style={styles.emptyText}>
      <Text>No Data at the moment</Text>
      <Button onPress={() => getNewAPI.executeQuery()} title="Refresh" />
    </View>
  );

  return (
    <View style={styles.container}>
      {getNewAPI.isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          data={getNewAPI?.response?.data?.results}
          renderItem={({ item, index }) => <NewsCard post={item} />}
          style={styles.list}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReached={fetchMoreData}
        />
      )}
    </View>
  );
};

export default News;
