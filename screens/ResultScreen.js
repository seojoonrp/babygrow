import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../AppContext";
import Restart from "../components/Restart";

const ResultScreen = () => {
  const navigation = useNavigation();

  const { score, setScore } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Restart />
      <Text style={styles.heightText}>우리 아이 키는..</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/ending.png')}
      />
      <Text style={styles.scoreText}>{score}cm</Text>
      <Image
        style={styles.giraffe1}
        source={require('../assets/images/giraffe.png')}
      />
      <Image
        style={styles.giraffe2}
        source={require('../assets/images/giraffe.png')}
      />
      <TouchableOpacity
        style={styles.restartBut}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>다시키우기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4E4E',
    zIndex: -2,
  },
  heightText: {
    fontFamily: 'MurukMuruk',
    fontSize: 24,
    color: '#F8DCAF'
  },
  image: {
    marginTop: 11,
  },
  giraffe1: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  giraffe2: {
    position: 'absolute',
    right: -15,
    top: -50,
    transform: [{ rotate: '180deg' }],
    zIndex: -1,
  },
  scoreText: {
    marginTop: 50,
    fontFamily: 'MurukMuruk',
    fontSize: 66,
    color: '#FFFEF4',
  },
  restartBut: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#F8DCAF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 13
  },
  buttonText: {
    fontFamily: 'MurukMuruk',
    fontSize: 24,
    color: '#FFFEF4'
  }
})