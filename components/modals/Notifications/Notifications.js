// Core components
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

// Assets
import { Ionicons } from "@expo/vector-icons";
import blank from "../../../assets/notifications-blank.jpg";

const Notifications = ({ modalVisible, setModalVisible }) => {
  return (
    <>
      <View style={styles.centeredView}>
        <Image source={blank} style={styles.imageBlank} />
        <Text style={styles.textBlank}>You've got no notifications</Text>
      </View>
      <Pressable
        style={styles.closeIcon}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Ionicons name="close-outline" size={30} color={"#8E8E8F"} />
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
  },
  imageBlank: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 80,
  },
  textBlank: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  closeIcon: {
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
export default Notifications;
