import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.js";

export default function RenderItem({ task, handleMarkDone, handleRemove }) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          handleMarkDone(task);
        }}
      >
        <Text style={task.done ? styles.textDone : styles.text}>
          {task.title}
        </Text>
        <Text style={task.done ? styles.textDone : styles.text}>
          {task.date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {task.done && (
        <TouchableOpacity
          style={styles.removeButtom}
          onPress={() => {
            handleRemove(task);
          }}
        >
          <Text style={styles.whitetext}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
