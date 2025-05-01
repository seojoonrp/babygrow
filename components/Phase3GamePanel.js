import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet} from "react-native";
import Baby from "./Baby";
import BabyOnBed from "./BabyOnBed";

const Phase3GamePanel = () => {
    const vibration = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.loop(
      Animated.spring(vibration,{
        toValue: 1, 
        useNativeDriver: true,
        tension: 45,
        friction: 5,
      })).start()
    }, [vibration]);
  
  const animatedStyle={
      transform:[
      {translateX: vibration.interpolate({
        inputRange: [0,1],
        outputRange: [48,100],
      })}
      ],
        position: 'absolute',
        left:48,
        top: 52,
        zIndex: 2,
        
  };
  return (
    <View style={styles.container}>
      {/* <Text style={Styles.scoreText}>Score: {score}</Text> */}
      <BabyOnBed isRelative={true} isClickable={false} isBaby={false} />
      <Animated.View style={[animatedStyle]}>
        <Baby/>
      </Animated.View>
    </View>
  );
};

export default Phase3GamePanel;

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
