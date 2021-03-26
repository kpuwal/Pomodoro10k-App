import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyleGuide from "./src/config/StyleGuide";

const App: React.FC = () => {
  console.log(StyleGuide.palette.main.primary)
  return (
    <View style={styles.container}>
      <Text>Open up!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.main.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;