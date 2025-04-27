import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const BabyOnBed = ({ isRelative, isClickable }) => {
  const wrapperStyle = isRelative ? styles.relativeWrapper : styles.absoluteWrapper;

  return (
    <View style={wrapperStyle}>
      <View style={styles.bar} />
      <View style={styles.pinkBackground}>
        <Image
          style={[styles.image, { top: 42, left: 32 }]}
          source={require("../assets/images/pillow.png")}
        />
        <Image
          style={[styles.image, { top: 212, left: 2 }]}
          source={require("../assets/images/blanket.png")}
        />
        <Image
          style={[styles.image, { top: 48, left: 55 }]}
          source={require("../assets/images/baby.png")}
        />
      </View>
      <View style={styles.bar} />
      {isClickable && // 버튼을 누를 수 있냐? 게임 중에는 O. 시작/결과화면에는 X. 이거 만들어야됨
        <TouchableOpacity />
      }
    </View>
  )
};

export default BabyOnBed;

const styles = StyleSheet.create({
  absoluteWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 361,
    height: 586,
    transform: [{ translateX: -180.5 }, { translateY: -293 }],
    zIndex: 0,
  },
  relativeWrapper: {
    width: 361,
    height: 586,
    alignItems: 'center',
  },
  bar: {
    backgroundColor: '#F7C89C',
    width: 361,
    height: 20,
    borderRadius: 10,
    zIndex: 2,
  },
  pinkBackground: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FEE5E5',
    width: 361,
    height: 566,
    borderRadius: 13,
    marginVertical: -10,
  },
  image: {
    position: 'absolute',
    zIndex: 1,
  },
});
