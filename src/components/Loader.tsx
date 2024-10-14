import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import withStyles from '../helpers/withStyles';

const styles = withStyles((appStyles) => ({
  container: {
    flex: 1,
    backgroundColor: appStyles.primaryBackgroundColor,
  },
}));

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="black" />
  </View>
);

export default Loader;
