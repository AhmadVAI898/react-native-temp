import React, { useState } from "react";

// Core Components
import { Modal, Pressable } from "react-native";

// Modals Components
import Notifications from "../../modals/Notifications/Notifications";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Styles
import styles from "./styles";

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

export default NotificationButton;
