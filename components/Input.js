import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

const Input = () =>{

const Wrapper = styled.TextInput`
    width: 50px;
    height: 30px;
    border-bottom-color: #eee;
    border-bottom-width: 2px;
    margin-vertical: 10px;
    text-align: center;
`;

    return <Wrapper/>

}


export default Input;