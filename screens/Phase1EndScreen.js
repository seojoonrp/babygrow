import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Phase1EndScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>1단계 무사히 clear~ {"\n"} </Text>
      <Text style={Styles.text}>이제 조금 더 어려워질 거에요!</Text>
      <TouchableOpacity
        style={Styles.startButton}
        onPress={() => navigation.navigate('Phase2GameScreen')}
      >
        <Text style={Styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Phase1EndScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleImage: {
    width: 279,
    marginTop: 105,
  },
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 39,
    paddingVertical: 6,
    marginTop: 10,
    backgroundColor: '#F8DCAF',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 13,
    zIndex: 3
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'MurukMuruk',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  text: {
    fontFamily: 'MurukMuruk',
    fontSize: 21,
    textAlign: 'center',
    lineHeight: 25,
    color: 'black',
  },
})