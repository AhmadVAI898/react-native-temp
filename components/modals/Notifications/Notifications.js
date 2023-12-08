// Core components
import { View, Pressable, Text, Image } from "react-native";

// Assets
import { Ionicons } from "@expo/vector-icons";
import blank from "../../../assets/notifications-blank.jpg";

// Styles
import styles from "./styles";

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

export default Notifications;
