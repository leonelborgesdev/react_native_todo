import { useState } from "react";
import styles from "./styles.js";
import RenderItem from "./RenderItem.js";
import {
  Alert,
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
    done: true,
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
        <FlatList
          renderItem={({ item: task }) => <RenderItem {...task} />}
          data={tasks}
        />
      </View>
    </View>
  );
}
