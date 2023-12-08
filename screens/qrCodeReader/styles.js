import { StyleSheet } from "react-native";

const borderRadius = 50;
const borderWidth = 5;
const width = 80;
const height = 80;
const borderColor = "#fff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    position: "relative",
    width: 300,
    height: 300,
    backgroundColor: "transparent",
  },
  topLeftBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderLeftWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderTopLeftRadius: borderRadius,
  },
  topRightBorder: {
    position: "absolute",
    top: 0,
    right: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderTopRightRadius: borderRadius,
  },
  bottomLeftBorder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderLeftWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderBottomLeftRadius: borderRadius,
  },
  bottomRightBorder: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderRightWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderBottomRightRadius: borderRadius,
  },
  actionContainer: {
    marginTop: 30,
  },
  actionText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
