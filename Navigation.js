import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import Phase1GameScreen from './screens/Phase1GameScreen';
import Phase2GameScreen from './screens/Phase2GameScreen';
import Phase3GameScreen from './screens/Phase3GameScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ headerShown: false }} // 위에 스크린/뒤로가기 헤더 안보이게
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Phase1GameScreen' component={Phase1GameScreen} />
      <Stack.Screen name='Phase2GameScreen' component={Phase2GameScreen} />
      <Stack.Screen name='Phase3GameScreen' component={Phase3GameScreen} />
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