import { StyleSheet } from "react-native";

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
    marginBottom: 40,
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
  wrapper: {
    flex: 0,
    width: "100%",
    height: "auto",
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  computedLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
});
const pickerStyle = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
};
export { styles, pickerStyle };
