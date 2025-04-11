import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import img1 from "../baby.png";

const GamePanel = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>게임컴포넨트임</Text>
      <TouchableOpacity>
        <Image
        style={Styles.navigateButton}
        source={img1}
        />
        onPress={() => navigation.navigate('ResultScreen', { screen: 'ResultScreen' })}
      </TouchableOpacity>
    </View>
  )
}

export default GamePanel;

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