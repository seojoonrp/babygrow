import React,{useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../AppContext";
const ResultScreen = () => {
  const navigation = useNavigation();
  const {score,setScore}=useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.heightTextContainer}>
        <Text style={styles.heightText}>우리 아이 키는...{score}</Text>
      </View>
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>내 아기 다시 키우기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFECCD',
  },
  heightTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 14,
    backgroundColor: '##FFFEF4',
    borderColor: '#F7C89C',
    borderWidth: 4,
    borderRadius: 13,
  },
  heightText: {

  },
  navigateButton: {
    backgroundColor: 'black',
    marginTop: '7%',
    padding: 7,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  }
})