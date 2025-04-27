import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Timer from "../components/Timer";
import Phase2GamePanel from "../components/Phase2GamePanel";
import Phase2LoadingPanel from "../components/Phase2LoadingPanel";

const Phase2GameScreen = () => {
  const navigation = useNavigation();

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  }

  return (
    <View style={styles.container}>
      {!isLoadingComplete &&
        <View style={styles.loadingPanel} >
          <Phase2LoadingPanel
            duration={3}
            onComplete={handleLoadingComplete}
          />
        </View>
      }
      <Text style={styles.levelText}>level 2</Text>
      <Timer
        duration={10}
        onComplete={() => navigation.navigate('Phase2EndScreen')}
        isActive={isLoadingComplete}
      />
      <Phase2GamePanel
        isActive={isLoadingComplete}
      />
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