import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState<{id: string, value: string}[]>([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addGoalHandler = (goal: string) => {
    // console.log(goal);
    setGoals((prevState) => [...prevState,  {id: Math.random().toString(), value: goal}]);
    setIsAddModal(false);
  };

  const deleteGoalHandler = (goalId: string) => {
    setGoals((prevGoals) => {
      return prevGoals.filter(item => item.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => { setIsAddModal(true)}}></Button>
      <GoalInput visible={isAddModal} onGoalAdd={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList 
        data={goals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={deleteGoalHandler} value={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 100
  }
});
