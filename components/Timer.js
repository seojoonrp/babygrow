import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";

const Timer = ({ duration, onComplete, isActive }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isActive) return;

    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 1,
      duration: duration * 1000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished && onComplete) {
        onComplete();
      }
    });
  }, [duration, onComplete, isActive]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '8%'], // 보더 쪽 애니메이션 이슈로 8%까지만 줄어들게
  });

  return (
    <View style={Styles.background}>
      <Animated.View style={[Styles.bar, { width: widthInterpolated }]} />
    </View>
  );
}

export default Timer;

const Styles = StyleSheet.create({
  background: {
    alignItems: 'flex-start',
    width: 358,
    height: 36,
    backgroundColor: '#F8DCAF',
    borderRadius: 18,
    padding: 4,
    zIndex: 3,
    overflow: 'hidden',
  },
  bar: {
    backgroundColor: '#FF4E4E',
    height: '100%',
    borderRadius: 14,
  }
});
