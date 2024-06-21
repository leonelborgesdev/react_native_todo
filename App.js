import { useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
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
      <Text style={styles.title}>Mis Tareas</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={handleChange} />
        <TouchableOpacity>
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#6f6f6f",
  },
  text: {
    fontSize: 16,
    color: "#6f6f6f",
  },
  whitetext: {
    fontSize: 16,
    color: "#fff",
  },
  textInput: {
    width: Dimensions.get("screen").width * 0.7,
    borderColor: "#6f6f6f",
    borderWidth: 1,
  },
  inputContainer: {
    marginTop: 20,
  },
});
