import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Phase1LoadingPanel from "../components/Phase1LoadingPanel";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View style={Styles.bar} />
      <View style={Styles.pinkBackground}>
        {/* <Text style={Styles.title}>잘자라{"\n"}우리아가</Text> */}
        <TouchableOpacity
          style={Styles.startButton}
          onPress={() => navigation.navigate('Phase1GameScreen')}
        >
          <Text style={Styles.buttonText}>START</Text>
        </TouchableOpacity>
        <Image
          style={[Styles.image, { top: 42, left: 32 }]}
          source={require("../assets/images/pillow.png")}
        />
        <Image
          style={[Styles.image, { top: 212, left: 2 }]}
          source={require("../assets/images/blanket.png")}
        />
        <Image
          style={[Styles.image, { top: 48, left: 55 }]}
          source={require("../assets/images/baby.png")}
        />
        <Image
          style={[Styles.image, { top: 225, left: 47 }]}
          source={require("../assets/images/title.png")}
        />
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
    alignItems: 'center',
    backgroundColor: 'white',
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
    justifyContent: 'flex-start',
    backgroundColor: '#FEE5E5',
    width: 361,
    height: 566,
    borderRadius: 13,
    marginVertical: -10
  },
  image: {
    position: 'absolute',
    zIndex: 1,
  },
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 39,
    paddingVertical: 6,
    marginTop: 394,
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
  }
  // title: {
  //   marginTop: 100,
  //   color: '#F8DCAF',
  //   textAlign: 'center',
  //   fontSize: 80,
  //   fontFamily: 'MurukMuruk',
  //   fontWeight: 400,
  //   lineHeight: 80,
  //   zIndex: 2,
  // },
})