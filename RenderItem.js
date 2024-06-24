import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.js";

export default function RenderItem(props) {
  const [text, setText] = useState("");
  const handleRemove = () => {
    console.log("removeItem");
  };
  const handleMarkDone = () => {
    console.log("markDone");
  };
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={handleMarkDone}>
        <Text style={props.done ? styles.textDone : styles.text}>
          {props.title}
        </Text>
        <Text style={props.done ? styles.textDone : styles.text}>
          {props.date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {props.done && (
        <TouchableOpacity style={styles.removeButtom} onPress={handleRemove}>
          <Text style={styles.whitetext}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
