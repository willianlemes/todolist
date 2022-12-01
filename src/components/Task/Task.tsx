import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

import { Feather } from "@expo/vector-icons";

import { sleep } from "../../utils";

export type TaskProps = {
  children: string;
  onRemoveTask: (task: string) => void;
};

export function Task({ children, onRemoveTask }: TaskProps) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={async (value) => {
          setChecked(value);
          await sleep(500);
          onRemoveTask(children);
        }}
        color={isChecked ? "#1e81b0" : undefined}
        style={{
          padding: 10,
        }}
      />
      <Text style={styles.task}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#154c79",
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  task: {
    marginLeft: 10,
    color: "white",
  },
});
