import React from 'react';
import styled from 'styled-components';
import {View, Text, TextInput, Button} from 'react-native';

const StartGameScreen = () =>{
    return <Wrapper>
        <Text>Start a New Game!</Text>
        <InputContainer>
            <Title>Select a Number</Title>
            <TextInput/>
            <View>
                <Button title='Reset' onPress={() =>{}}/>
                <Button title='Confirm' onPress={() =>{}}/>

            </View>
        </InputContainer>
    </Wrapper>
}

const Wrapper = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
`;
const Title  = styled.Text`

`;
const InputContainer  = styled.View`

`;

export default StartGameScreen;