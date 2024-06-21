import { useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
      <Text>Mis Tareas</Text>
      <TextInput style={styles.text} onChangeText={handleChange} />
      <Button onPress={handleAlert} title="Aceptar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  text: {
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: Dimensions.get("screen").width * 0.7,
    height: 40,
  },
});
