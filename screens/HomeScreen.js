import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>홈화면임</Text>
      <TouchableOpacity
        style={Styles.navigateButton}
        onPress={() => navigation.navigate('Phase1GameScreen')}
      >
        <Text style={Styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;

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
    marginTop: '10%',
    padding: 7,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  }
})