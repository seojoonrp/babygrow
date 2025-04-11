import React, { useEffect, useState } from 'react';
import { Image } from "react-native";
import * as Font from 'expo-font';
import Navigation from './Navigation';

const App = () => {
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

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'MurukMuruk': require("./assets/fonts/KCC-Murukmuruk.ttf"),
    }).then(() => setFontsLoaded(true))
  }, []);
  if (!fontsLoaded) return null;

  return (
    <Navigation />
  );
}

export default App;