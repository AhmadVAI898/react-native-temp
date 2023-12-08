// Core components
import { Text, View, Image } from "react-native";

// Assets
import profile from "../../assets/profile.png";

// Styles
import styles from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={profile} />
      <View style={styles.body}>
        <Text style={styles.name}>ALi Molhem</Text>
        <Text style={styles.info}>ali.molhem@gmail.com</Text>
      </View>
    </View>
  );
};
export default Profile;
