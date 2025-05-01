import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";
import Baby from "./Baby";
import BabyOnBed from "./BabyOnBed";

const Phase3GamePanel = () => {
  const vibration = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.loop(
      Animated.spring(vibration, {
        toValue: 1,
        useNativeDriver: true,
        speed:30,
        bounciness: 20,
      })).start()
  }, [vibration]);

  const animatedStyle = {
    transform: [
      {
        translateX: vibration.interpolate({
          inputRange: [0.9, 1],
          outputRange: [90, 100],
        })
      }
    ],
    position: 'absolute',
    left: 0,
    top: 52,
    zIndex: 2,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle]}>
        <Baby/>
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
