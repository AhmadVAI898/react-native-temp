import { StyleSheet } from "react-native";

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
    borderRadius: 50,
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
export default styles;
