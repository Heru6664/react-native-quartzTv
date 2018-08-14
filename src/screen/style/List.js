import { StyleSheet, Platform, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const styles = StyleSheet.create({
  statusbar: {
    height: STATUSBAR_HEIGHT
  },
  appBar: {
    backgroundColor: "#353b48",
    height: APPBAR_HEIGHT
  },
  bgNightBlue: {
    backgroundColor: "#353b48"
  },
  colWhite: {
    color: "white"
  },
  content: {
    padding: 5
  },
  bgBlck: {
    backgroundColor: "#2f3640"
  },
  searchBar: {
    width: "80%"
  },
  result: {
    backgroundColor: "#353b48",
    alignItems: "center",
    justifyContent: "center"
  },
  details: {
    width: "58%"
  },
  title: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  defSize: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default styles;
