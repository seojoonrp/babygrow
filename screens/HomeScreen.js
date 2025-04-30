import React,{useContext,useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../AppContext.js";
import BabyOnBed from '../components/BabyOnBed.js';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {score,setScore}=useContext(AppContext);
  useEffect(()=>{
    setScore(0);
  },[])
  return (
    <View style={Styles.container}>
      <BabyOnBed isRelative={false} isClickable={false} />
      <Image
        style={Styles.titleImage}
        source={require("../assets/images/title.png")}
      />
      <TouchableOpacity
        style={Styles.startButton}
        onPress={() => navigation.navigate('Phase1GameScreen')}
      >
        <Text style={Styles.buttonText}>START</Text>
      </TouchableOpacity>
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
  }
})