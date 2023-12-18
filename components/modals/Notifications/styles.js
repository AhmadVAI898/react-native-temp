import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  wrapper: {
    marginTop: 120,
    marginBottom: 30,
  },
  notificationList: {
    paddingHorizontal: 10,
  },
  categories: {
    marginBottom: 10,
    paddingHorizontal: 10,
    maxHeight: 30,
  },
  categoryTab: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  selectedCategoryTab: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#3498db",
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    color: "#3498db",
  },
  selectedCategoryText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    flexDirection: "row",
    borderRadius: 10,
    minWidth: "100%",
    height: 90,
    elevation: 15, // Add this line for shadow in Android
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    width: 45,
    height: 45,
  },
  description: {
    fontSize: 14,
    color: "#3498db",
    marginLeft: 10,
    maxWidth: 280,
  },
});
export default styles;
