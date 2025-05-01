import React, { useContext, useRef, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AppContext } from "../AppContext";
// Make sure we're receiving score and setScore as props here
const Baby = ({ positionStyle }) => {
  const { score, setScore } = useContext(AppContext);

  const [kneeCount, setKneeCount] = useState(0);
  const [bellyCount, setBellyCount] = useState(0);

  const [isBellyPressed, setIsBellyPressed] = useState(false);
  const bellyPressDuration = 700;
  const bellyTimeoutRef = useRef(null);

  const leftJongariStyle = kneeCount % 2 === 0 ? styles.leftJongariIdle : styles.leftJongariPressed;
  const rightJongariStyle = kneeCount % 2 === 0 ? styles.rightJongariIdle : styles.rightJongariPressed;

  const handleBellyPress = () => {
    setBellyCount(bellyCount + 1);
    setIsBellyPressed(true);

    if (bellyTimeoutRef.current) {
      clearTimeout(bellyTimeoutRef.current);
    }

    bellyTimeoutRef.current = setTimeout(() => {
      setIsBellyPressed(false);
      bellyTimeoutRef.current = null;
    }, bellyPressDuration);

    setScore(score - 1);
  };

  const handleKneePress = () => {
    setKneeCount(kneeCount + 1);
    setScore(score + 1);
  }

  return (
    <View style={[styles.container, positionStyle]}>
      <Text style={{ position: 'absolute', top: 10, left: 12 }}>knee: {kneeCount}</Text>
      <Text style={{ position: 'absolute', top: 27, left: 12 }}>belly: {bellyCount}</Text>
      <Text style={{ position: 'absolute', top: 10, right: 12 }}>score: {score}</Text>
      <Image
        style={{ zIndex: 2 }}
        source={require('../assets/images/babyBody.png')}
      />
      <Image
        style={leftJongariStyle}
        source={require('../assets/images/leftJongari.png')}
      />
      <Image
        style={rightJongariStyle}
        source={require('../assets/images/rightJongari.png')}
      />
      <Image
        style={[styles.eyesIdle, { opacity: isBellyPressed ? 0 : 1 }]}
        source={require('../assets/images/eyesIdle.png')}
      />
      <Image
        style={[styles.eyesPressed, { opacity: isBellyPressed ? 1 : 0 }]}
        source={require('../assets/images/eyesPressed.png')}
      />
      <TouchableOpacity
        style={styles.leftKneeBut}
        onPress={handleKneePress}
      />
      <TouchableOpacity
        style={styles.rightKneeBut}
        onPress={handleKneePress}
      />
      <TouchableOpacity
        style={styles.bellyBut}
        onPress={handleBellyPress}
      />
    </View>
  );
}

export default Baby;

const styles = StyleSheet.create({
  container: {
    width: 251,
    height: 480,
    borderColor: 'black',
    borderWidth: 1,
  },
  leftJongariIdle: {
    position: 'absolute',
    bottom: -2,
    left: 29,
  },
  leftJongariPressed: {
    position: 'absolute',
    bottom: -7,
    left: 8,
    transform: [{ rotate: '31deg' }],
    zIndex: 1,
  },
  rightJongariIdle: {
    position: 'absolute',
    bottom: 2,
    right: 30,
  },
  rightJongariPressed: {
    position: 'absolute',
    bottom: 2,
    right: 12,
    transform: [{ rotate: '-38deg' }],
    zIndex: 1,
  },
  eyesIdle: {
    position: 'absolute',
    top: 67,
    left: 65,
    zIndex: 3,
  },
  eyesPressed: {
    position: 'absolute',
    top: 60,
    left: 64,
    zIndex: 3,
  },
  leftKneeBut: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 73,
    left: 32,
    zIndex: 3,
  },
  rightKneeBut: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 78,
    right: 32,
    zIndex: 3,
  },
  bellyBut: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 110,
    height: 110,
    borderRadius: 55,
    position: 'absolute',
    bottom: 130,
    left: 70,
    zIndex: 3,
  }
});