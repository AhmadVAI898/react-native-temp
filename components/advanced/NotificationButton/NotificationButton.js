import React, { useState } from "react";

// Core Components
import { Modal, StyleSheet, View, Pressable } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";
import Notifications from "../../modals/Notifications/Notifications";

const NotificationButton = () => {
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

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    top: 60,
    right: 30,
    zIndex: 1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default NotificationButton;
