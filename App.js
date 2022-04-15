import React, {useState} from 'react'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const textInputHandler = (inputText) => {
    setEnteredGoal(inputText)
  }

  const addGoalHandler = goalTitle => {
    setCourseGoals([
      ...courseGoals, 
      {key: Math.random().toString(), value: goalTitle}
    ])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    <View style={style.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>

      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={removeGoalHandler} title={itemData.item.value}/> }
      />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50,
  },
})
