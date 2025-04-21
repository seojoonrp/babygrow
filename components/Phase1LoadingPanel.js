import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Phase1LoadingPanel = ({ duration, onComplete }) => {
  const [count, setCount] = useState(duration);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [count, onComplete]);

  return (
    <View style={Styles.loadingOverlay}>
      <View style={Styles.container}>
        <Text style={[Styles.text, { color: '#F7C89C' }]}>level 1</Text>
        <Image style={Styles.image} source={require('../assets/images/phase1LoadingImage.png')} />
        <Text style={Styles.text}>
          <Text>아기가 자고 있어요!{"\n"}</Text>
          <Text style={{ color: '#FF4E4E' }}>무릎</Text>
          <Text>을 눌러 키를 키워주세요</Text>
        </Text>
      </View>
    </View>
  );
}

export default Phase1LoadingPanel;

const Styles = StyleSheet.create({
  loadingOverlay: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
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
  },
  image: {
    marginVertical: 14,
  }
})