import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import Phase1GameScreen from './screens/Phase1GameScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Phase1GameScreen' component={Phase1GameScreen} />
      <Stack.Screen name='ResultScreen' component={ResultScreen} />
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