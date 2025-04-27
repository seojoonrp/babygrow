import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

const Timer = ({ duration, onComplete, isActive }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = 100;
    const totalSteps = duration * 1000 / interval;
    let curStep = 0;

    const timer = setInterval(() => {
      curStep++;
      setProgress((curStep / totalSteps) * 100);

      if (curStep >= totalSteps) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete, isActive]);

  return (
    <View style={Styles.background}>
      <View style={[Styles.bar, { width: `${100 - progress * 0.95}%` }]} />
    </View>
  )
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
  },
  bar: {
    backgroundColor: '#FF4E4E',
    height: '100%',
    borderRadius: 14,
    overflow: 'hidden',
  }
})