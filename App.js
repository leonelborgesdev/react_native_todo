import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e);
  };
  const handleAlert = () => {
    Alert.alert("Message", message);
  };
  return (
    <View style={styles.container}>
      <Text>Hola Leo!</Text>
      <TextInput style={styles.text} onChangeText={handleChange} />
      <Button onPress={handleAlert} title="Aceptar" />
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
