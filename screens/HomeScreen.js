import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View style={Styles.bar} />
      <View style={Styles.pinkBackground}>
        <TouchableOpacity
          style={Styles.startButton}
          onPress={() => navigation.navigate('Phase1GameScreen')}
        >
          <Text style={Styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bar} />
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
  bar: {
    backgroundColor: '#F7C89C',
    width: 361,
    height: 20,
    borderRadius: 10,
    zIndex: 2
  },
  pinkBackground: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE5E5',
    width: 361,
    height: 566,
    borderRadius: 13,
    marginVertical: -10
  },
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 39,
    paddingVertical: 12,
    backgroundColor: '#F8DCAF',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 13,
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  }
})