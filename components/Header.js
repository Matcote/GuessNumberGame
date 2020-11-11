import React from "react";
import styled from "styled-components/native";

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  height: 90px;
  padding-top: 36px;
  background-color: #f7287b;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 22px;
  color: black;
`;

export default Header;
