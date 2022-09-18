import React from 'react';
import {ScrollView, View} from 'react-native';
import Flexbox from './Flexbox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
		<Flexbox />
      </ScrollView>
    </View>
  );
};

export default App;
