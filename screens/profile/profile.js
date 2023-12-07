import React, { useState } from "react";

// Core Components
import { View, Text, StyleSheet, Modal } from "react-native";
import Button from "../../components/ui/Button/Button";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        // presentationStyle="pageSheet"
        // statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Ionicons
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.closeIcon}
            name="close-outline"
            size={20}
          />
        </View>
      </Modal>
      <Text>Profile</Text>
      <Button
        type="SECONDARY"
        text="Open Modal"
        onPress={() => setModalVisible(true)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 60,
  },
});
export default Profile;
