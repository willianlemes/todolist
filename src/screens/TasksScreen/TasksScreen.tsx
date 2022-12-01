import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { Tasks, Input } from "../../components";

export function TasksScreen() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (newTask: string) => {
    const task = newTask.trim();

    if (!task) {
      return;
    }

    const taskFound = tasks.find((t) => t === task);

    if (!taskFound) {
      setTasks((prev) => [...prev, task]);
    }
  };

  const handleRemoveTask = (task: string) => {
    const newTasks = tasks.filter((t) => t !== task);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Tasks tasks={tasks} onRemoveTask={handleRemoveTask} />
      <Input onAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#063970",
    paddingTop: getStatusBarHeight(),
  },
  tasks: {
    paddingHorizontal: 10,
  },
});
