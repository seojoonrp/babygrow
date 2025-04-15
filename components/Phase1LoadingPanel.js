import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Phase1LoadingPanel = () => {
  return (
    <View style={Styles.container}>
      <Text style={[Styles.text, { color: '#F7C89C' }]}>level 1</Text>
      <Text style={Styles.text}>
        <Text>아기가 자고 있어요!{"\n"}</Text>
        <Text style={{ color: '#FF4E4E' }}>무릎</Text>
        <Text>을 눌러 키를 키워주세요</Text>
      </Text>
    </View>
  );
}

export default Phase1LoadingPanel;

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 383,
    paddingHorizontal: 16,
    backgroundColor: '#FFECCD',
    borderColor: '#F7C89C',
    borderWidth: 4,
    borderRadius: 13,
  },
  text: {
    fontFamily: 'MurukMuruk',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 24,
    color: '#F8DCAF',
  }
})