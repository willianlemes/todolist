import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import * as S from "./Input.styles";

export type InputProps = {
  onAddTask: (newTask: string) => void;
};

export function Input({ onAddTask, ...rest }: InputProps) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (newTask: string) => {
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <S.Container>
      <S.Input
        {...rest}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Crie a tarefa aqui"
        placeholderTextColor={"#eeeee4"}
        onSubmitEditing={(event) => {
          handleAddTask(event.nativeEvent.text);
        }}
      />
      {newTask.length ? (
        <TouchableOpacity
          onPress={() => {
            handleAddTask(newTask);
          }}
        >
          <S.IconCheck />
        </TouchableOpacity>
      ) : undefined}
    </S.Container>
  );
}
