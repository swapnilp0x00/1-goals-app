import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState<{id: string, value: string}[]>([]);

  const addGoalHandler = (goal: string) => {
    console.log(goal);
    setGoals((prevState) => [...prevState,  {id: Math.random().toString(), value: goal}]);
  };

  const deleteGoalHandler = (goalId: string) => {
    setGoals((prevGoals) => {
      return prevGoals.filter(item => item.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onGoalAdd={addGoalHandler}/>
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
