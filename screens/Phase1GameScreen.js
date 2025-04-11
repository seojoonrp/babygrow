import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Phase1GamePanel from "../components/Phase1GamePanel";
import Timer from "../components/Timer";

const Phase1GameScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Timer
        duration={5}
        onComplete={() => navigation.navigate('Phase2GameScreen')}
      />
      <Phase1GamePanel />
    </View>
  )
}

export default Phase1GameScreen;

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})