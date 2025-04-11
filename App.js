import React, { useEffect } from 'react';
import Navigation from './Navigation';
import { Image } from "react-native";

const App = () => {
  prefetchImages = [
    require("./assets/images/baby.png"),
    require("./assets/images/blanket.png"),
    require("./assets/images/pillow.png"),
  ];

  useEffect(() => {
    prefetchImages.forEach(img => {
      const uri = Image.resolveAssetSource(img).uri;
      Image.prefetch(uri);
    });
  }, []);

  return (
    <Navigation />
  );
}

export default App;