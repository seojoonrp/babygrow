import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';
import FirstStartScreen from './screens/FirstStartScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='GameScreen' component={GameScreen} />
      <Stack.Screen name='ResultScreen' component={ResultScreen} />
      <Stack.Screen name='FirstStartScreen' component={FirstStartScreen} />
      <Stack.Screen name='FirstSecondScreen' component={FirstSecondScreen} />
      <Stack.Screen name='SecondStartScreen' component={SecondStartScreen} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  )
}

export default Navigation;