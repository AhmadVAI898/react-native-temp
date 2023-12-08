import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },

  container_SECONDARY: {
    borderColor: "#3B77",
    backgroundColor: "#4444",

    borderWidth: 2,
  },
  containerDisabled: {
    opacity: 0.7,
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_SECONDARY: {
    color: "white",
  },
});
export default styles;
