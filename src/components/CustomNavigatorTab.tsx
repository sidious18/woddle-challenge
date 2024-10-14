import React from 'react';
import { View, Text } from 'react-native';
import withStyles from '../helpers/withStyles';

interface CustomNavigatoTabProps {
  screenName: string;
  focused: boolean;
  Icon: React.JSX.Element,
}

const CustomNavigatorTab = ({ Icon, screenName, focused }: CustomNavigatoTabProps) => {
  return (
    <View style={styles.container}>
      {Icon}
      <Text style={[ styles.tabText, focused ? styles.tabTextActive : styles.tabTextInactive]}>
        {screenName}
      </Text>
    </View>
  );
};

const styles = withStyles(() => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 10,
    paddingTop: 5,
  },
  tabTextActive: {
    fontFamily: 'Cabin-Light',
  },
  tabTextInactive: {
    fontFamily: 'Cabin',
  },
}));

export default CustomNavigatorTab;
