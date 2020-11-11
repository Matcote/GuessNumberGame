import React from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);
  const [selectedNumber, setSelectedNumber] = React.useState();

  const inputHandler = (input) => {
    setEnteredValue(input.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card width="200px">
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Wrapper>
        <Title>Start a New Game!</Title>
        <Card>
          <Title>Select a Number</Title>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={(input) => inputHandler(input)}
            value={enteredValue}
          />
          <ButtonContainer>
            <ButtonBox>
              <Button
                color={Colors.secondary}
                title="Reset"
                onPress={resetInputHandler}
              />
            </ButtonBox>
            <ButtonBox>
              <Button
                color={Colors.primary}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </ButtonBox>
          </ButtonContainer>
        </Card>
        {confirmedOutput}
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

const Wrapper = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  margin: 10px 0;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 15px;
`;
const ButtonBox = styled.View`
  width: 100px;
`;
const Input = styled.TextInput`
  width: 50px;
  height: 30px;
  border-bottom-color: #eee;
  border-bottom-width: 2px;
  margin-vertical: 10px;
  text-align: center;
`;
const Confirm = styled.View``;

export default StartGameScreen;
