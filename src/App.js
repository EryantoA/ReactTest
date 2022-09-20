import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import FlexBox from './pages/FlexBox';

const App = () => {
	const [isShow, SetIsShow] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			SetIsShow(false);
		}, 6000);
	});
	
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
		{/* <StylingComponent /> */}
		{isShow && <FlexBox />}
		{/* <Position/> */}
      </ScrollView>
    </View>
  );
};

export default App;
