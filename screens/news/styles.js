import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginVertical: 15,
    marginHorizontal: 10,
  },
  footerText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  emptyText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 50,
  },
  list: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 8,
  },
});

export default styles;
