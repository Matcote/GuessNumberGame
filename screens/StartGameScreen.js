import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = () =>{
    const [enteredValue, setEnteredValue] = React.useState('');
    const [confirmed, setConfirmed] = React.useState(false);
    const [selectedNumber, setSelectedNumber] = React.useState();

    const inputHandler = (input) =>{
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () =>{
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber===NaN || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
    }
    return (
    <TouchableWithoutFeedback onPress={() =>{
        Keyboard.dismiss();
    }}>
        <Wrapper>
            <Title>Start a New Game!</Title>
            <Card >
                <Title>Select a Number</Title>
                <Input autoCapitalize='none' autoCorrect={false} blurOnSubmit keyboardType='number-pad' maxLength={2} onChangeText={(input) => inputHandler(input)} value={enteredValue}/>
                <ButtonContainer>
                    <ButtonBox><Button color={Colors.secondary} title='Reset' onPress={resetInputHandler}/></ButtonBox>
                    <ButtonBox><Button color={Colors.primary} title='Confirm' onPress={confirmInputHandler}/></ButtonBox>
                </ButtonContainer>
            </Card>
        </Wrapper>
    </TouchableWithoutFeedback>
    )
}

const Wrapper = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
`;
const Title  = styled.Text`
    font-size: 20px;
    margin: 10px 0;
    
`;
const ButtonContainer  = styled.View`
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


export default StartGameScreen;