import { useState } from "react";

// Core Components
import { View, FlatList, ActivityIndicator, Text } from "react-native";

// UI Components
import { NewsCard } from "../../components/ui";

// Libraries
import useQuery from "@hybris-software/use-query";

// Constants
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
  });

  // Functions
  const renderLoader = (API) => {
    return API?.isLoading ? (
      <View style={styles.footerText}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const renderHeader = (text) => <Text style={styles.title}>{text}</Text>;

  const renderEmpty = (API, text) => (
    <View style={styles.emptyText}>
      {!API.isLoading && <Text>{text}</Text>}
    </View>
  );

  const loadMoreItem = (totalPages) => {
    if (totalPages > currentPage) {
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
        ListFooterComponent={() => renderLoader(getNewAPI)}
        ListHeaderComponent={() => renderHeader("News")}
        ListEmptyComponent={() =>
          renderEmpty(getNewAPI, "No Data at the moment")
        }
        onEndReached={() => loadMoreItem(getNewAPI?.response?.data?.totalPages)}
      />
    </View>
  );
};

export default News;
