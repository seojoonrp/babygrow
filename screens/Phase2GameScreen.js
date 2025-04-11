import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GamePanel from "../components/GamePanel";
import Timer from "../components/Timer";

const Phase2GameScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Timer
        duration={5}
        onComplete={() => navigation.navigate('Phase3GameScreen')}
      />
      <GamePanel />
    </View>
  )
}

export default Phase2GameScreen;

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})