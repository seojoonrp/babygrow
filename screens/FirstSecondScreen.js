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
      <Text>1단계 끝. 2단계는 이제 좀 더 어려워질 거에요~ 움직이는 아기를 잘 키워주세요</Text>
      <TouchableOpacity
       style={Styles.navigateButton}
       onPress={() => navigation.navigate('SecondStartScreen', { screen: 'SecondStartScreen' })}
       >
        <Text>2단계 시작!</Text>
      </TouchableOpacity>

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