import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Timer from "../components/Timer";
import Phase3GamePanel from "../components/Phase3GamePanel";
import Restart from "../components/Restart";

const Phase3GameScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Restart positionStyle={{ left: 345, top: 155 }} />
      <View style={styles.backCarpet} />
      <View style={[styles.bong, { top: 45 }]} />
      <View style={[styles.bong, { bottom: 45 }]} />
      <Phase3GamePanel />
      <View style={styles.levelAndTimer}>
        <Text style={styles.levelText}>Lv.3</Text>
        <Timer
          duration={10000}
          onComplete={() => navigation.replace('ResultScreen')}
          isActive={true}
          style={{ transform: [{ rotate: '90deg' }] }}
        />
      </View>
      <View style={styles.night} />
    </View>
  )
}

export default Phase3GameScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: -2,
  },
  backCarpet: {
    position: 'absolute',
    backgroundColor: '#85E8B2',
    width: 138,
    height: '110%',
    borderColor: '#FFFEF4',
    borderWidth: 16,
  },
  bong: {
    position: 'absolute',
    width: '100%',
    height: 25,
    backgroundColor: '#D9E1E7',
  },
  levelAndTimer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    marginLeft: 19,
    marginTop: -200,
  },
  levelText: {
    fontFamily: 'MurukMuruk',
    fontSize: 24,
    color: '#F8DCAF',
    transform: [{ rotate: '90deg' }],
    marginBottom: 175,
    zIndex: 3,
  },
  night: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(45, 53, 95, 0.5)',
    zIndex: -1,
    pointerEvents: 'none',
  }
})