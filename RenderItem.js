import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.js";

export default function RenderItem(props) {
  console.log(props);
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={props.done ? styles.textDone : styles.text}>
          {props.title}
        </Text>
        <Text style={props.done ? styles.textDone : styles.text}>
          {props.date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {props.done && (
        <TouchableOpacity style={styles.removeButtom}>
          <Text style={styles.whitetext}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
