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

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAlert = () => {
    Alert.alert("Message", message);
  };
  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      title: text,
      done: false,
      date: new date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una nueva tarea ..."
          onChangeText={(t) => setText(t)}
          value={text}
          style={styles.textInput}
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
