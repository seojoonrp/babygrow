import React, { useEffect, useState } from 'react';
import { Image } from "react-native";
import * as Font from 'expo-font';
import Navigation from './Navigation';

const App = () => {
  const [score, setScore] = useState(0);

  // 이미지 로드
  prefetchImages = [
    require("./assets/images/baby.png"),
    require("./assets/images/blanket.png"),
    require("./assets/images/pillow.png"),
    require("./assets/images/title.png"),
  ];

  useEffect(() => {
    prefetchImages.forEach(img => {
      const uri = Image.resolveAssetSource(img).uri;
      Image.prefetch(uri);
    });
  }, []);


  // 폰트 로드

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'MurukMuruk': require("./assets/fonts/KCC-Murukmuruk.ttf"),
    }).then(() => setFontsLoaded(true))
  }, []);

  if (!fontsLoaded) return null;
  

  return (
    <Navigation score={score} setScore={setScore}/>
  );
}

export default App;

// git commit test from minsu