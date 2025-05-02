import React from "react";
import { View, StyleSheet } from "react-native";

import BabyOnBed from "./BabyOnBed";
import Baby from "./Baby";

const Phase1GamePanel = () => {
  return (
    <View style={styles.container}>
      <BabyOnBed isRelative={true} isClickable={true} isBaby={false} />
      <Baby positionStyle={{ position: 'absolute', top: 48, left: 55, zIndex: 2 }} />
    </View>
  );
};

export default Phase1GamePanel;

const styles = StyleSheet.create({
  container: {
    marginTop: 13,
  },
});