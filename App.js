import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={{flex: 1,}}>
      <Header title='Guess a Number'/>
      <StartGameScreen/>
    </View>
  );
}

