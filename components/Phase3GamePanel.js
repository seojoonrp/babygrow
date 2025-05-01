import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";
import Baby from "./Baby";

const Phase3GamePanel = () => {
  const vibration = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.loop(
      Animated.spring(vibration, {
        toValue: 1,
        useNativeDriver: true,
        speed: 35,
        bounciness: 20,
      })).start()
  }, [vibration]);

  const animatedStyle = {
    transform: [
      {
        translateX: vibration.interpolate({
          inputRange: [0.9, 1],
          outputRange: [75, 125],
        })
      },
      {
        translateY: vibration.interpolate({
          inputRange: [0.9, 1],
          outputRange: [-3, 3],
        })
      }
    ],
    position: 'absolute',
    left: -56,
    top: 77,
    zIndex: 2,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle]}>
        <Baby isPhase3={true} />
      </Animated.View>
    </View>
  );
};

export default Phase3GamePanel;

const styles = StyleSheet.create({
  container: {
    width: 317,
    height: 663,
    borderColor: 'black',
    borderWidth: 1,
  },
});
