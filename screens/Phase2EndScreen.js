import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Restart from "../components/Restart";

const Phase2EndScreen = () => {
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
    navigation.navigate('Phase3GameScreen');
  }

  return (
    <View style={styles.container}>
      <Restart />
      <Text style={[styles.text, { color: '#F7C89C', fontSize: 36, marginTop: -20 }]}>level up!</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/phase2LoadingImage.png')}
      />
      <Text style={[styles.text, { marginTop: 15 }]}>한눈 판 사이 아기가 사라졌어요!</Text>
      <Text style={[styles.text, { marginTop: -7 }]}>어디로 갔을까요?</Text>
    </View>
  )
}

export default Phase2EndScreen;

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
  image: {
    marginTop: 10
  },
})