import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalAddItems(props) {
  return (
    <View>
      <Pressable
       onPress={props.onDeleteItem.bind(this, props.id)}
       android_ripple={{color:'#ccccc'}}
       style={({pressed}) => pressed && styles.pressedItem}
       >
        {props.text && <Text style={styles.ListItems}>{props.text}</Text>}
      </Pressable>
    </View>
  );
}

export default GoalAddItems;
const styles = StyleSheet.create({
  ListItems: {
    padding: 10,
    backgroundColor: "#E94444",
    margin: 7,
    color: "black",
    fontSize: 18,
    borderRadius: 5,
  },
  pressedItem:{
    opacity:.5
  }
});
