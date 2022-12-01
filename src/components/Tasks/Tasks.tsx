import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { Task } from "../../components/Task/Task";

export type TasksProps = {
  tasks: string[];
  onRemoveTask: (task: string) => void;
};

export function Tasks({ tasks, onRemoveTask }: TasksProps) {
  return (
    <FlatList
      contentContainerStyle={styles.tasks}
      data={tasks}
      renderItem={({ item }) => (
        <Task key={item} onRemoveTask={onRemoveTask}>
          {item}
        </Task>
      )}
    />
  );
}

const styles = StyleSheet.create({
  tasks: {
    paddingHorizontal: 10,
  },
});
