import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Timer from "../components/Timer";
import Phase1GamePanel from "../components/Phase1GamePanel";
import Phase1LoadingPanel from "../components/Phase1LoadingPanel";
import BabyOnBed from "../components/BabyOnBed";

const Phase1GameScreen = () => {
  const navigation = useNavigation();

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  }

  return (
    <View style={Styles.container}>
      {!isLoadingComplete &&
        <View style={Styles.loadingPanel} >
          <Phase1LoadingPanel
            duration={3}
            onComplete={handleLoadingComplete}
          />
        </View>
      }
      <Timer
        duration={10}
        onComplete={() => navigation.navigate('Phase1EndScreen')}
        isActive={isLoadingComplete}
      />
      <Phase1GamePanel />
    </View>
  )
}

export default Phase1GameScreen;

const Styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainscreen: {
    position: 'absolute',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingPanel: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
  }
})