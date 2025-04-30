import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BabyOnBed from "./BabyOnBed";
import Baby from "./Baby";

const GamePanel = ({ score, setScore }) => {
  return (
    <View style={styles.container}>
      <BabyOnBed isRelative={true} isClickable={true} isBaby={false} />
      <Baby positionStyle={{ position: 'absolute', top: 48, left: 55, zIndex: 2 }} score={score} setScore={setScore} />
    </View>
  );
};

export default GamePanel;

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
