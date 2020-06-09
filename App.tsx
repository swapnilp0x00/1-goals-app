import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState<{key: string, value: string}[]>([]);

  const addGoalHandler = (goal: string) => {
    console.log(goal);
    setGoals((prevState) => [...prevState,  {key: Math.random().toString(), value: goal}]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onGoalAdd={addGoalHandler}/>
      <FlatList 
        data={goals} 
        renderItem={itemData => <GoalItem value={itemData.item.value}/>}
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
