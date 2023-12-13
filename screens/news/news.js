import { useState } from "react";

// Core Components
import { View, FlatList, ActivityIndicator, Text } from "react-native";

// UI Components
import { NewsCard } from "../../components/ui";

// Libraries
import useQuery from "@hybris-software/use-query";

// Data
import endPoints from "../../data/endPoints";

// Styles
import styles from "./styles";

const News = ({ navigation }) => {
  // States
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Queries
  const getNewAPI = useQuery({
    url: endPoints.news.GET_NEWS(currentPage),
    executeImmediately: true,
    onSuccess: (response) => {
      setUsers([...users, ...response?.data?.results]);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  // Functions
  const renderLoader = () => {
    return getNewAPI?.isLoading ? (
      <View style={styles.footerText}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const renderHeader = () => <Text style={styles.title}>RN News</Text>;

  const renderEmpty = () => (
    <View style={styles.emptyText}>
      {!getNewAPI.isLoading && <Text>No Data at the moment</Text>}
    </View>
  );

  const loadMoreItem = () => {
    if (getNewAPI?.response?.data?.totalPages > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <NewsCard post={item} navigation={navigation} />
        )}
        onEndReachedThreshold={0}
        style={styles.list}
        ListFooterComponent={renderLoader}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        onEndReached={loadMoreItem}
      />
    </View>
  );
};

export default News;
