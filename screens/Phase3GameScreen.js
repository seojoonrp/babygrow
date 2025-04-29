import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Timer from "../components/Timer";
import Restart from "../components/Restart";

const Phase3GameScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Restart />
      <Text style={styles.levelText}>Lv.3</Text>
      <Timer
        duration={10}
        onComplete={() => navigation.navigate('ResultScreen')}
        isActive={true}
      />
      <Text>3차게임패널~</Text>
    </View>
  )
}

export default Phase3GameScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  levelText: {
    fontFamily: 'MurukMuruk',
    fontSize: 24,
    color: '#F8DCAF',
    zIndex: 3,
    marginTop: -20,
  },
})