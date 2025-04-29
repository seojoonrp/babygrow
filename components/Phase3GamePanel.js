import React, { useState, useRef, useEffect } from "react";
import { Animated, Easing, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import Baby from "./Baby";
import BabyOnBed from "./BabyOnBed";

const Phase3GamePanel = () => {

  const vibrateTranslateX=useSharedValue(0);

  const vibrate=useCallback(()=>{
     vibrateTranslateX.value=100;
  },[]); 
  
  const animatedStyle=useAnimatedStyle(()=>{
    return{
        transform:[
            {translateX:vibrateTranslateX.value}
        ],
    };
  },[]);

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
