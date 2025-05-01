import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Restart = ({ positionStyle }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.circle, positionStyle]}
      onPress={() => navigation.replace('HomeScreen')}
    >
      <Image source={require('../assets/images/restartIcon.png')} />
    </TouchableOpacity>
  )
}

export default Restart;

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 23,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F8DCAF',
    zIndex: 100,
  },
})