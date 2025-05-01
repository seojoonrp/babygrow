import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Restart from "../components/Restart";

const Phase1EndScreen = () => {
  const navigation = useNavigation();

  const duration = 100000;

  // duration(5초)가 지나면 handleOnComplete를 실행하는 코드.
  useEffect(() => {
    // setTimeout(f, t) : t가 지난 후 함수 f를 실행한다.
    const timer = setTimeout(() => {
      handleOnComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [])

  const handleOnComplete = () => {
    navigation.navigate('Phase2GameScreen');
  }

  return (
    <View style={styles.container}>
      <Restart />
      <Text style={[styles.text, { color: '#F7C89C', fontSize: 36 }]}>level up!</Text>
      <Text style={[styles.text, { color: '#FF4E4E', marginTop: 13 }]}>아기가 움직이기 시작해요!</Text>
      <Text style={styles.text}>놓치지 말고 성장판을 자극해주세요</Text>
    </View>
  )
}

export default Phase1EndScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEF4',
  },
  text: {
    textAlign: 'center',
    color: '#F8DCAF',
    fontFamily: 'MurukMuruk',
    fontSize: 24,
  },
})