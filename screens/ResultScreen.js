import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResultScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>결과화면임</Text>
      <TouchableOpacity
        style={Styles.navigateButton}
        onPress={() => navigation.navigate('HomeScreen', { screen: 'HomeScreen' })}
      >
        <Text style={Styles.buttonText}>홈화면 가기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.navigateButton}
        onPress={() => navigation.navigate('GameScreen', { screen: 'GameScreen' })}
      >
        <Text style={Styles.buttonText}>게임화면 가기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultScreen;

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