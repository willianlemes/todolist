import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { Tasks, Input } from "../../components";

export function TasksScreen() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (newTask: string) => {
    const taskFound = tasks.find((t) => t === newTask.trim());

    if (!taskFound) {
      setTasks((prev) => [...prev, newTask.trim()]);
    }

    setNewTask("");
  };

  const handleRemoveTask = (task: string) => {
    const newTasks = tasks.filter((t) => t !== task);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Tasks tasks={tasks} onRemoveTask={handleRemoveTask} />
      <Input
        value={newTask}
        onChangeText={setNewTask}
        onAddTask={handleAddTask}
      />
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
