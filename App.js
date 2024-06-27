import { useEffect, useState } from "react";
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
import uuid from "react-native-uuid";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      idTask: uuid.v4(),
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    storeData(tmp);
    setText("");
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("mytodo-tasks", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("mytodo-tasks");
      if (value !== null) {
        const tasksLocal = JSON.parse(value);
        setTasks(tasksLocal);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleRemove = (task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex((elem) => elem.idTask === task.idTask);
    tmp.splice(index, 1);
    setTasks(tmp);
    storeData(tmp);
  };
  const handleRemoveAert = (task) => {
    Alert.alert(
      "Confirmar",
      `¿Esta seguro/a de que desea eliminar la tarea '${task.title}'?`,
      [
        {
          text: "Si",
          onPress: () => handleRemove(task),
        },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );
  };
  const handleMarkDone = (task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex((elem) => elem.idTask === task.idTask);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
    storeData(tmp);
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
              handleRemoveAert={handleRemoveAert}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
}
