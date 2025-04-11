import React, {useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SecondStartScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('GameScreen');
    }, 3000);
  })
  return (
    <View style={Styles.container}>
      <Text>2단계 start~</Text>
    </View>
  )
}

export default FirstStartScreen;

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