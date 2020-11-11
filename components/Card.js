import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Card = ({ children, width }) => {
  return <Wrapper width={width}>{children}</Wrapper>;
};

const Wrapper = styled.View`
  margin-vertical: 10px;
  width: ${(props) => props.width || "300px"};
  max-width: 80%;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  elevation: 7;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;
`;
export default Card;
