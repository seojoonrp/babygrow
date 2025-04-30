import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import Phase1GameScreen from './screens/Phase1GameScreen';
import Phase1EndScreen from './screens/Phase1EndScreen';
import Phase2GameScreen from './screens/Phase2GameScreen';
import Phase2EndScreen from './screens/Phase2EndScreen';
import Phase3GameScreen from './screens/Phase3GameScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

const StackScreen = ({score, setScore}) => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
    // screenOptions={{ headerShown: false }} // 위에 스크린/뒤로가기 헤더 안보이게
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Phase1GameScreen' component={Phase1GameScreen} score={score} setScore={setScore} />
      <Stack.Screen name='Phase1EndScreen' component={Phase1EndScreen} initialParams={{score, setScore}} />
      <Stack.Screen name='Phase2GameScreen' component={Phase2GameScreen} initialParams={{score, setScore}} />
      <Stack.Screen name='Phase2EndScreen' component={Phase2EndScreen} initialParams={{score, setScore}} />
      <Stack.Screen name='Phase3GameScreen' component={Phase3GameScreen} initialParams={{score, setScore}} />
      <Stack.Screen name='ResultScreen' component={ResultScreen} initialParams={{score, setScore}} />
    </Stack.Navigator>
  )
}

const Navigation = ({score, setScore}) => {
  return (
    <NavigationContainer>
      <StackScreen score={score} setScore={setScore}/>
    </NavigationContainer>
  )
}

export default Navigation;