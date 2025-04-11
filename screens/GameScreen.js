import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GamePanel from "../components/GamePanel";


const GameScreen = () => {
  const navigation = useNavigation();

  return (
    <GamePanel>
    </GamePanel>
  )
}

export default GameScreen;
