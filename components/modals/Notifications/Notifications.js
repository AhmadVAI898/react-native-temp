import { useState } from "react";

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

// Assets
import { Ionicons } from "@expo/vector-icons";
import blank from "../../../assets/notifications-blank.jpg";

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

  console.log(categories);
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
                  key={item.id}
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

                return (
                  <View style={[styles.notificationBox, { marginBottom }]}>
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
                  </View>
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
