import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import macbook from './assets/Apple-M2-SoC-devrait-maintenant-faire-ses-debuts-sur-MacBook.jpeg';
import SampleComponent from './SampleComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
