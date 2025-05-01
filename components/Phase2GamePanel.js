import React, { useState, useRef, useEffect } from "react";
import { Animated, Easing, View, StyleSheet } from "react-native";

import Baby from "./Baby";
import BabyOnBed from "./BabyOnBed";

const Phase2GamePanel = () => {
  const [score, setScore] = useState(0);

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
    position: 'absolute',
    left: 48,
    top: 52,
    zIndex: 2,
  };

  return (
    <View style={styles.container}>
      {/* <Text style={Styles.scoreText}>Score: {score}</Text> */}
      <BabyOnBed isRelative={true} isClickable={false} isBaby={false} />
      <Animated.View style={[animatedStyle]}>
        <Baby />
      </Animated.View>
    </View>
  );
};

export default Phase2GamePanel;

const styles = StyleSheet.create({
  container: {
    marginTop: 13,
  },
  imageBg: {
    width: 251,
    height: 480,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 35,
    position: 'absolute',
  },
  scoreText: {
    fontFamily: 'MurukMuruk',
    color: 'black',
    fontSize: 50,
    marginTop: 20,
    textAlign: 'center',
  },
});
