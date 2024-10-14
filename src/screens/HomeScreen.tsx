import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { UserData, useUserData } from '../hooks/useUserData';
import withStyles from '../helpers/withStyles';
import { ScreenWrapper } from '../components/ScreenWrapper';
import Header from '../components/Header';
import PagerViewKidsData from '../components/PagerViewKidsData';
import TileGrid from '../components/TilesGrid';
import { DEFAULT_STEP } from '../constants/styles';
import { AdviceContainer } from '../components/AdviceContainer';

const HomeScreenContent = () => {
  const userData = useUserData() as UserData;
  const [currentPage, setCurrentPage] = useState(0);
  const selectedKid = userData.kids[currentPage];

  return (
    <View style={styles.container}>
      <Header />
      <PagerViewKidsData
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userData={userData}
      />
      <TileGrid selectedKid={selectedKid} />
      <TouchableOpacity style={{ paddingLeft: DEFAULT_STEP, paddingRight: DEFAULT_STEP }}>
        <Image style={styles.image} source={require('../assets/promo-image.png')} />
      </TouchableOpacity>
      <AdviceContainer id={selectedKid.id} />
    </View>
  );
};

export const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <HomeScreenContent />
    </ScreenWrapper>
  );
};

const styles = withStyles((appStyles) => ({
  container: {
    backgroundColor: appStyles.primaryBackgroundColor,
    flex: 1,
  },
  paginationContainer: {
    backgroundColor: 'red',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  inactiveDot: {
    borderWidth: 1,
    borderColor: '#000',
  },
  image: {
    width: '100%',
  },
}));
