import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },

  container_DANGER: {
    backgroundColor: "#d74e51",
  },
  containerDisabled: {
    opacity: 0.7,
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_DANGER: {
    color: "white",
  },
});
export default styles;
