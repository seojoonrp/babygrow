import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BabyOnBed from "./BabyOnBed";

const GamePanel = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.scoreText}>Score: {score}</Text>
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
      <BabyOnBed isClickable={true} />
    </View>
  );
};

export default GamePanel;

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
