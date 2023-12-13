import { useState } from "react";

// Core Components
import { Modal, Pressable } from "react-native";

// Modals Components
import { Notifications } from "../../modals";

// Screens
import { Profile, HomePage, News, QrCodeReader } from "../../../screens/index";

// Libraries
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Styles
import styles from "./styles";

// Initialize the Navigation Stack
const Tab = createBottomTabNavigator();

// Default options for the Stack Navigator
const screenOptions = {
  headerShown: false,
};
const TabNavigator = () => {
  return (
    <>
      <NotificationButton />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          unmountOnBlur={true}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
            unmountOnBlur: true, // Add the unmountOnBlur to make sure that re-render the homepage to trigger useAuth
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper" color={color} size={size} />
            ),
            unmountOnBlur: true, // Add the unmountOnBlur this tab to avoid keeping the camera working
          }}
        />
        <Tab.Screen
          name="Qr Reader"
          component={QrCodeReader}
          unmountOnBlur={true}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="qr-code" color={color} size={size} />
            ),
            unmountOnBlur: true, // add this to refresh the news page to reset the news lazy loading
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          unmountOnBlur={true}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const NotificationButton = () => {
  // Hooks
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Notifications
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Modal>
      <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
        <Ionicons name="notifications-outline" size={30} color={"#8E8E8F"} />
      </Pressable>
    </>
  );
};

export default TabNavigator;
