import { useEffect, useState } from "react";

// Core components
import {
  View,
  Pressable,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Libraries
import useQuery from "@hybris-software/use-query";
import { useNavigation } from "@react-navigation/native";

// Assets
import { Ionicons } from "@expo/vector-icons";
import blank from "../../../assets/notifications-blank.jpg";

// Constants
import endPoints from "../../../data/endPoints";

// Styles
import styles from "./styles";

const Notifications = ({ API, modalVisible, setModalVisible }) => {
  // Get unique categories
  const uniqueCategories = new Set();
  API?.response?.data?.forEach((item) => {
    uniqueCategories.add(item?.category);
  });

  const categories = [
    { key: 0, value: "All" },
    ...Array.from(uniqueCategories).map((category, index) => ({
      key: index + 1,
      value: category,
    })),
  ];

  // States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notificationId, setNotificationID] = useState(null);

  // Queries
  const markAsReadAPI = useQuery({
    url: endPoints.notifications.MARK_AS_READ(notificationId),
    method: "GET",
    executeImmediately: false,
    onSuccess: (response) => {
      console.log(response, "Marked as read");
    },
    onError: (error) => {
      console.log(error, "error");
    },
  });

  // Hooks
  const navigation = useNavigation();

  useEffect(() => {
    if (notificationId) {
      setModalVisible(!modalVisible);
      navigation.navigate("Home");
      markAsReadAPI?.executeQuery();
    }
  }, [notificationId]);

  return (
    <>
      <Pressable
        style={styles.closeIcon}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Ionicons name="close-outline" size={30} color={"#8E8E8F"} />
      </Pressable>
      <View style={styles.centeredView}>
        {API?.response?.data?.length > 0 ? (
          <View style={styles.wrapper}>
            <ScrollView horizontal={true} style={styles.categories}>
              {categories?.map((item) => (
                <TouchableOpacity
                  key={item.key}
                  style={[
                    styles.categoryTab,
                    selectedCategory === item?.value &&
                      styles.selectedCategoryTab,
                  ]}
                  onPress={() => setSelectedCategory(item?.value)}
                >
                  <View style={styles.tab}>
                    <Text
                      style={[
                        styles.categoryText,
                        selectedCategory === item?.value &&
                          styles.selectedCategoryText,
                      ]}
                    >
                      {item?.value}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <FlatList
              style={styles.notificationList}
              enableEmptySections={true}
              data={
                selectedCategory === "All"
                  ? API?.response?.data
                  : API?.response?.data?.filter(
                      (item) => item.category === selectedCategory
                    )
              }
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                const isLastItem =
                  index === (API?.response?.data?.length || 0) - 1;
                const marginBottom = isLastItem ? 20 : 5;
                const backgroundColor = item.isRead ? "#FFFFFF" : "#F2F2E2";

                return (
                  <Pressable
                    style={[
                      styles.notificationBox,
                      { marginBottom, backgroundColor },
                    ]}
                    key={item.id}
                    onPress={() => {
                      setNotificationID(item?.id);
                    }}
                  >
                    <Image
                      style={styles.icon}
                      source={{
                        uri: "https://img.icons8.com/clouds/100/000000/groups.png",
                      }}
                    />
                    <Text
                      numberOfLines={3}
                      ellipsizeMode="head"
                      style={styles.description}
                    >
                      {item.description}
                    </Text>
                  </Pressable>
                );
              }}
            />
          </View>
        ) : (
          <>
            <Image source={blank} style={styles.imageBlank} />
            <Text style={styles.textBlank}>You've got no notifications</Text>
          </>
        )}
      </View>
    </>
  );
};

export default Notifications;
