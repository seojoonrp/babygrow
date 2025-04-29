import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Restart = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.circle}
      onPress={() => navigation.navigate('HomeScreen')}
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
    top: 19,
    left: 19,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F8DCAF',
    zIndex: 100,
  },
})