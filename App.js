import React, { useEffect } from 'react';
import Navigation from './Navigation';
import { Image } from "react-native";

const App = () => {
  useEffect(() => {
    const imageUri = Image.resolveAssetSource(require("./images/baby.png")).uri;

    Image.prefetch(imageUri);
  }, []);

  return (
    <Navigation />
  );
}

export default App;