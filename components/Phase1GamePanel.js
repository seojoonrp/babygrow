import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import babyImage from "../images/baby.png";

const GamePanel = () => {
  const navigation = useNavigation();
  const [score, setScore] = useState(0);

  return (
    <View style={Styles.container}>
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
        <Text style={Styles.scoreText}>Score: {score}</Text>
      </ImageBackground>
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
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
});
