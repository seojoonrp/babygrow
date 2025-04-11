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
        resizeMode="contain"
      >
        <TouchableOpacity
          style={Styles.circleButton}
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imageBg: {
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});
