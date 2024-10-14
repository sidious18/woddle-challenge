import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import withStyles from '../helpers/withStyles';
import InboxIcon from '../assets/Inboxicon';
import { useNavigation } from '@react-navigation/native';
import { TAB_NAMES } from '../navigation/navigators';
import { DEFAULT_STEP } from '../constants/styles';

const Header = () => {
  const navigation = useNavigation();
  const goToProfilePage = () => {
    navigation.navigate(TAB_NAMES.MORE_TAB as never);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Woddle
        </Text>
      </View>
      <View style={styles.profileBlock}>
        <View>
          <View style={styles.inboxNotificationSignal} />
          <TouchableOpacity onPress={goToProfilePage}>
            <InboxIcon />
          </TouchableOpacity>
        </View>
        <View>
          {/* would use uri from userData in prod code */}
          <Image style={styles.avatar} source={require('../assets/Avatar.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = withStyles(() => ({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: DEFAULT_STEP,
  },
  title: {
    color: '#000',
    fontFamily: 'Ribeye',
    fontSize: 40,
  },
  profileBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: DEFAULT_STEP,
  },
  inboxNotificationSignal: {
    position: 'absolute',
    top: -3,
    left: DEFAULT_STEP,
    backgroundColor: '#FF2D2D',
    width: 10,
    height: 10,
    borderRadius: 5,
    zIndex: 1,
  },
}));

export default Header;
