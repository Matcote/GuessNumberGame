import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';


const Card = ({children}) =>{
    return <Wrapper>
        {children}
    </Wrapper>
}

const Wrapper = styled.View`
    width: 300px;
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