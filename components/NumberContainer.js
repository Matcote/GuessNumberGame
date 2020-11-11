import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <Wrapper>
      <Number>{children}</Number>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  border-width: 2px;
  border-color: ${Colors.secondary};
  padding: 10px;
  border-radius: 10px;
  margin-vertical: 10px;
  align-items: center;
  justify-content: center;
`;

const Number = styled.Text`
  color: ${Colors.secondary};
  font-size: 22px;
`;

export default NumberContainer;
