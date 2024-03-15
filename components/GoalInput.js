import { View, StyleSheet, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";

function GoalInput({onAddGoal, OnCancel}) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal>
      <View style={styles.mainContainer}>
        <View style={styles.ImgContainer}>

        <Image
        style={styles.image}
        source={require('../assets/images/Arrow.png')}
        />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textGoals}
            placeholder="Write your goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.containerBtn}>
            <View style={styles.Button}>
              <Button
                onPress={addGoalHandler}
                title="Add more"
                color="#7CFF58"
              />
            </View>
            <View style={styles.Button}>
              <Button
               onPress={OnCancel} 
               title="Cancel" 
               color="#E94444" 
               />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  image:{
    width:150,
    height:150
    
  },
  ImgContainer:{
    padding:8,
    alignItems:'center',
  },
  mainContainer: {
    // backgroundColor: "gray",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding:8
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerBtn: {
    flexDirection: "row",
    marginTop:15
  },
  textGoals: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#cccccc",
    borderWidth: 2,
    padding: 5,
  },
  Button:{
    width:'30%',
    marginHorizontal:8,
  }
});
