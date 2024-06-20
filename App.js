import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Leo!</Text>
      <TextInput style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 120,
    height: 40,
  },
});
