import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Timer from "../components/Timer";
import Phase1GamePanel from "../components/Phase1GamePanel";
import Phase1LoadingPanel from "../components/Phase1LoadingPanel";
import Restart from "../components/Restart";

const Phase1GameScreen = ({ route }) => {
  const navigation = useNavigation();
  const score = route.params.score;

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  }

  return (
    <View style={styles.container}>
      {!isLoadingComplete &&
        <View style={styles.loadingPanel} >
          <Phase1LoadingPanel
            duration={3}
            onComplete={handleLoadingComplete}
          />
        </View>
      }
      <Restart />
      <Text style={styles.levelText}>Lv.1</Text>
      <Timer
        duration={5}
        onComplete={() => navigation.replace('Phase1EndScreen', { score: score })}
        isActive={isLoadingComplete}
      />
      <Phase1GamePanel score={score} />
      <View style={styles.night} />
    </View>
  )
}

export default Phase1GameScreen;

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
  }
})