import React, { useState } from 'react';
import { View, Text, Image, LayoutChangeEvent } from 'react-native';
import PagerView from 'react-native-pager-view';
import { UserData } from '../hooks/useUserData';
import withStyles from '../helpers/withStyles';
import GenderIcon from '../assets/Gendericon';
import { DEFAULT_STEP } from '../constants/styles';

interface PagerViewKidsDataProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  userData: UserData
}

const PagerViewKidsData = ({ currentPage, setCurrentPage, userData }: PagerViewKidsDataProps) => {

  const handlePageSelected = (event: any) => {
    const index = event.nativeEvent.position;
    setCurrentPage(index);
  };

  const [imageHeight, setImageHeight] = useState(0);

  const onImageLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setImageHeight(height);
  };

  return (
  <>
    <PagerView onPageSelected={handlePageSelected} style={{ height: imageHeight }} initialPage={0}>
      {userData.kids.map((kidData, index) => (
        <View style={[styles.pagerCardContainer, { height: imageHeight }]} key={index}>
          <Image style={styles.image} onLayout={onImageLayout} source={require('../assets/kid-avatar.png')} />
          <View style={styles.pagerBadge}>
            <Text style={styles.nameBox}>
              <Text style={styles.nameText}>{kidData.name}</Text>
              <Text>{'\u00A0'.repeat(5)}</Text>
              <Text>
                {kidData.gender === 'male' ? <GenderIcon/> : <GenderIcon />}
              </Text>
            </Text>
            <Text style={styles.ageText}>{kidData.age}</Text>
          </View>
        </View>
      ))}
    </PagerView>
    <View style={styles.paginationContainer}>
      {userData.kids.map((_, index) => (
        <View key={index} style={styles.paginatorBox}>
          <View
            style={[
              styles.dot,
              currentPage === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        </View>
      ))}
    </View>
  </>
  );
};

const styles = withStyles(() => ({
  nameBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameText: {
    fontFamily: 'Cabin',
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
  },
  ageText: {
    fontFamily: 'Cabin',
    fontSize: 14,
    fontWeight: 400,
  },
  pagerCardContainer: {
    marginLeft: DEFAULT_STEP,
    marginRight: DEFAULT_STEP,
  },
  paginatorBox: { paddingHorizontal: 2 },
  paginationContainer: {
    top: -20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
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
  pagerBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#F3F7FAB2',
    borderRadius: 23,
    paddingVertical: 10,
    paddingHorizontal: DEFAULT_STEP,
  },
}));

export default PagerViewKidsData;


