import styled from "styled-components/native";

import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: #1e81b0ed;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: #eeeee4;
  margin-right: 5px;
`;

export const IconCheck = styled(FontAwesome).attrs({
  name: "check",
  size: 25,
  color: "white",
})``;
