import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const ScrollViewComponents = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Component that wraps platform ScrollView while providing integration
          with touch locking "responder" system. Keep in mind that ScrollViews
          must have a bounded height in order to work, since they contain
          unbounded-height children into a bounded container (via a scroll
          interaction). In order to bound the height of a ScrollView, either set
          the height of the view directly (discouraged) or make sure all parent
          views have bounded height.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default ScrollViewComponents;
