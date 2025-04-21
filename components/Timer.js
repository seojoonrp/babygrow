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
      <View style={[Styles.bar, { width: `${100 - progress}%` }]} />
    </View>
  )
}

export default Timer;

const Styles = StyleSheet.create({
  background: {
    width: '60%',
    height: '2%',
    backgroundColor: '#ddd',
    alignItems: 'flex-start',
  },
  bar: {
    backgroundColor: 'black',
    height: '100%',
  }
})