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
    <View style={Styles.container}>
      {!isLoadingComplete &&
        <View style={Styles.loadingPanel} >
          <Phase2LoadingPanel
            duration={3}
            onComplete={handleLoadingComplete}
          />
        </View>
      }
      {isLoadingComplete&&
      <View style={Styles.mainscreen}>
        <Timer
        duration={10}
        onComplete={() => navigation.navigate('Phase2EndScreen')}
        isActive={isLoadingComplete}
      />
      <Phase2GamePanel
      isActive={isLoadingComplete}
      />
      </View>
      } 
    </View>
  )
}

export default Phase2GameScreen;

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