// Core components
import { StyleSheet, Text, View, Image } from "react-native";

// Assets
import profile from "../../assets/profile.png";

export default Profile = () => {
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  body: {
    marginTop: 60,
    alignItems: "center",
  },

  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
});
