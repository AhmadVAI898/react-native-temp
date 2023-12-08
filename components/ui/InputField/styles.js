import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "auto",
    alignSelf: "stretch",
  },
  componentWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 50,
    // height: 60,
    marginBottom: 5,
  },
  computedLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  input: {
    flex: 1,
    width: "100%",
    paddingVertical: 25,
  },
  textError: {
    minHeight: 20,
    paddingVertical: 5,
    width: "100%",
    fontSize: 12,
    textAlign: "left",
    color: "red",
  },
});
export default styles;
