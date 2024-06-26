import { useState } from "react";
import styles from "./styles.js";
import RenderItem from "./RenderItem.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    setText("");
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("my-key", value);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const handleRemove = (task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex((elem) => elem.title === task.title);
    tmp.splice(index, 1);
    setTasks(tmp);
  };
  const handleMarkDone = (task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex((elem) => elem.title === task.title);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
    console.log("markDone tachando");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una nueva tarea ..."
          onChangeText={(t) => {
            setText(t);
          }}
          value={text}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.whitetext}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({ item: task }) => (
            <RenderItem
              task={task}
              handleMarkDone={handleMarkDone}
              handleRemove={handleRemove}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
}
