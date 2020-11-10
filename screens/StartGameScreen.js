import React from 'react';
import styled from 'styled-components/native';
import {View, Text, TextInput, Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input'

const StartGameScreen = () =>{
    return <Wrapper>
        <Title>Start a New Game!</Title>
        <Card >
            <Title>Select a Number</Title>
            <Input/>
            <ButtonContainer>
                <ButtonBox><Button color={Colors.secondary} title='Reset' onPress={() =>{}}/></ButtonBox>
                <ButtonBox><Button color={Colors.primary} title='Confirm' onPress={() =>{}}/></ButtonBox>
            </ButtonContainer>
        </Card>
    </Wrapper>
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


export default StartGameScreen;