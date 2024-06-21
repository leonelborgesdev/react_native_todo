import { useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const tasks = [
  {
    title: "Alimentar al perro",
    done: false,
    date: new Date(),
  },
  {
    title: "Regar las plantas",
    done: false,
    date: new Date(),
  },
  {
    title: "Salir a correr",
    done: false,
    date: new Date(),
  },
];

export default function App() {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e);
  };
  const handleAlert = () => {
    Alert.alert("Message", message);
  };

  function renderItem({ item: task }) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.text}>{task.title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Agregar una nueva tarea ..."
          onChangeText={handleChange}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.whitetext}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList renderItem={renderItem} data={tasks} />
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
    marginTop: 20,
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
  addButton: {
    width: Dimensions.get("screen").width * 0.25,
    backgroundColor: "#5897fb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  scrollContainer: {},
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 1,
  },
});
