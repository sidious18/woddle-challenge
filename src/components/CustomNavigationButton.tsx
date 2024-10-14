import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import withStyles from '../helpers/withStyles';

const CustomButtom = () => (
  <TouchableOpacity style={styles.customButton}>
    <View style={styles.customButtonContainer}>
      <View style={styles.customButtonTextBox}>
        <Text style={styles.text}>W</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = withStyles(() => ({
  customButton: {
    position: 'absolute',
    borderRadius: 46,
    backgroundColor: '#FEF9F5',
    top: -46,
    left: '50%',
    width: 92,
    height: 92,
    marginLeft: -46,
    padding: 5,
  },
  customButtonContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 41,
    padding: 5,
    width: 82,
    height: 82,
  },
  customButtonTextBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BECFDA',
    width: '100%',
    borderRadius: 46,
  },
  text: {
    fontFamily: 'Ribeye',
    fontSize: 50,
  },
}));

export default CustomButtom;
