import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    width: 200,
    height: 200
  },
  loadAnimation: {
    width: 200,
    height: 200
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
  card: {
    flexDirection: "row"
  },
  posterContainer: {
    width: "40%",
    height: 212,
    padding: 5,
    paddingBottom: 10
  },
  poster: {
    height: 200
  },
  details: {
    width: "58%"
  },
  title: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  defSize: {
    fontSize: 14
  }
});

export default styles;
