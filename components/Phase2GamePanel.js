import React, { useState, useRef ,useEffect} from "react";
import { Animated, Easing, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import babyImage from "../assets/images/baby.png";

const Phase2GamePanel = () => {
  const navigation = useNavigation();
  const [score, setScore] = useState(0);
  const rotation=useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    Animated.loop(
        Animated.timing(rotation,{
            toValue:1,
            duration:2000,
            easing: Easing.linear,
            useNativeDriver:true,
        })
    ).start();
  },[rotation]);

  const rotateInterpolate=rotation.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg','360deg'],
  });
  const animatedStyle={
    transform : [{rotate : rotateInterpolate}],
  };
  return (
    <View style={Styles.container}>
        <Text style={Styles.scoreText}>Score: {score}</Text>
        <Animated.View style={[animatedStyle]}>
          <ImageBackground
            source={babyImage}
            style={Styles.imageBg}
            resizeMode="cover"
          >
            <TouchableOpacity
              style={[Styles.circleButton, { left: 22, bottom: 60 }]}
              onPress={() => setScore(score + 1)}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.circleButton, { right: 22, bottom: 80 }]}
              onPress={() => setScore(score + 1)}
            >
            </TouchableOpacity>
          </ImageBackground>
        </Animated.View>
        </View>
  );
};

export default Phase2GamePanel;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
