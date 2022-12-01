import React, { useState } from "react";
import { TextInputProps, TouchableOpacity } from "react-native";

import * as S from "./Input.styles";

export type InputProps = TextInputProps & {
  onAddTask: (newTask: string) => void;
};

export function Input({ onAddTask, onChangeText, ...rest }: InputProps) {
  const [newTask, setNewTask] = useState("");

  return (
    <S.Container>
      <S.Input
        {...rest}
        onChangeText={(value) => {
          setNewTask(value);
          onChangeText?.(value);
        }}
        placeholder="Crie a tarefa aqui"
        placeholderTextColor={"#eeeee4"}
        onSubmitEditing={(event) => {
          onAddTask(event.nativeEvent.text);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          onAddTask(newTask);
        }}
      >
        <S.IconCheck />
      </TouchableOpacity>
    </S.Container>
  );
}
