import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { Task } from "../../components/Task/Task";
import { EmptyTask } from "../../components/EmptyTask/EmptyTask";

export type TasksProps = {
  tasks: string[];
  onRemoveTask: (task: string) => void;
};

export function Tasks({ tasks, onRemoveTask }: TasksProps) {
  return (
    <FlatList
      contentContainerStyle={styles.tasks}
      data={tasks}
      renderItem={({ item }) => <Task onRemoveTask={onRemoveTask}>{item}</Task>}
      ListEmptyComponent={EmptyTask}
      keyExtractor={(item) => item}
    />
  );
}

const styles = StyleSheet.create({
  tasks: {
    paddingHorizontal: 10,
    flexGrow: 1,
  },
});
