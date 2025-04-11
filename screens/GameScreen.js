import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Timer from "../components/Timer";

const GameScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Timer
        duration={30}
        onComplete={() => navigation.navigate('ResultScreen', { screen: 'ResultScreen' })}
      />
      <Text style={Styles.titleText}>게임화면임</Text>
      <TouchableOpacity
        style={Styles.navigateButton}
        onPress={() => navigation.navigate('ResultScreen', { screen: 'ResultScreen' })}
      >
        <Text style={Styles.buttonText}>결과화면 가기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GameScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20
  },
  navigateButton: {
    backgroundColor: 'black',
    marginTop: '7%',
    padding: 7,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  }
})