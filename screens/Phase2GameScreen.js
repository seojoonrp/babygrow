import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Timer from "../components/Timer";
import Phase2GamePanel from "../components/Phase2GamePanel";
import Restart from "../components/Restart";

const Phase2GameScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Restart />
      <Text style={styles.levelText}>Lv.2</Text>
      <Timer
        duration={5}
        onComplete={() => navigation.replace('Phase2EndScreen')}
        isActive={true}
      />
      <Phase2GamePanel />
      <View style={styles.night} />
    </View>
  )
}

export default Phase2GameScreen;

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
  loadingPanel: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  levelText: {
    fontFamily: 'MurukMuruk',
    fontSize: 24,
    color: '#F8DCAF',
    zIndex: 3,
    marginTop: -20,
  },
  night: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(45, 53, 95, 0.5)',
    zIndex: 2,
    pointerEvents: 'none',
  },
})