import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#6f6f6f",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#6f6f6f",
  },
  textDone: {
    fontSize: 16,
    color: "#6f6f6f",
    textDecorationLine: "line-through",
  },
  whitetext: {
    fontSize: 16,
    color: "#fff",
  },
  textInput: {
    width: Dimensions.get("screen").width * 0.6,
    borderColor: "#6f6f6f",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
  },
  removeButtom: {
    backgroundColor: "#F33D3D",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  addButton: {
    width: Dimensions.get("screen").width * 0.25,
    backgroundColor: "#5897fb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  scrollContainer: {
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
