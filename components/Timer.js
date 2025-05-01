import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

const Timer = ({ duration, onComplete, isActive, style }) => {
  const [progress, setProgress] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    setProgress(1);

    const intervalTime = 32;
    const totalSteps = (duration * 1000) / intervalTime;
    let currentStep = 0;

    intervalRef.current = setInterval(() => {
      currentStep++;
      setProgress(1 - currentStep / totalSteps);

      if (currentStep >= totalSteps) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        if (onComplete) onComplete();
      }
    }, intervalTime);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, duration, onComplete]);

  return (
    <View style={[styles.background, style]}>
      <View style={[styles.bar, { width: `${8 + 92 * progress}%` }]} />
      {/* 8%는 보더 이슈때문에 필요한 최소 보정폭 */}
    </View>
  );
}

export default Timer;

const styles = StyleSheet.create({
  background: {
    alignItems: 'flex-start',
    width: 358,
    height: 36,
    backgroundColor: '#F8DCAF',
    borderRadius: 18,
    padding: 4,
    overflow: 'hidden',
    zIndex: 3,
  },
  bar: {
    backgroundColor: '#FF4E4E',
    height: '100%',
    borderRadius: 14,
  }
});
