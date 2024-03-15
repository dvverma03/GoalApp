import { useEffect, useState } from "react";

import GoalAddItems from "./components/GoalAddItems";
import GoalInput from "./components/GoalInput";

import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible]= useState(false)

  function goalAddHandler(enteredGoalText) {
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endModelVisible();
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((courseGoals) =>
      courseGoals.filter((goal) => goal.id !== goalId)
    );
  }

  function startModelVisible(){
    setModelIsVisible(true)
  }

  function endModelVisible(){
    setModelIsVisible(false)
  }

  return (
    <View style={styles.ListContainer}>
      <View style={{marginHorizontal:8}}>

      <Button title="Add New Goal +" onPress={startModelVisible} color='#7CFF58'/>
      </View>
      {modelIsVisible && <GoalInput onAddGoal={goalAddHandler} OnCancel={endModelVisible} />}
      <View >
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalAddItems
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    marginTop: 50,
    borderTopColor: "#cccccc",
    borderTopWidth: 2,
    paddingVertical: 15,
  },
});

