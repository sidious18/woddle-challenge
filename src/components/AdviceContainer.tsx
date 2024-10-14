import React, { Suspense } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import withStyles from '../helpers/withStyles';
import { useKidAdvicesData } from '../hooks/useKidAdvicesData';
import Loader from './Loader';
import { DEFAULT_STEP } from '../constants/styles';
import AdviceIcon from '../assets/AdviceIcon';

const AdviceContainerContent = ({ id }: { id: number }) => {
  const kidAdvice = useKidAdvicesData(id);

  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require('../assets/advice-image.png')} />
      <View style={styles.adviceBox}>
        <Text style={styles.title}>
          {kidAdvice?.title}
        </Text>
        <View style={styles.descriptionBox}>
          <Text style={styles.desc}>
            {kidAdvice?.desc}
          </Text>
          <AdviceIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const AdviceContainer = ({ id }: { id: number }) => {
  return (
    <Suspense fallback={<Loader />}>
      <AdviceContainerContent id={id} />
    </Suspense>
  );
};

const styles = withStyles((appStyles) => ({
  container: {
    marginTop: DEFAULT_STEP,
    marginBottom: DEFAULT_STEP,
    backgroundColor: appStyles.primaryBackgroundColor,
    marginHorizontal: DEFAULT_STEP,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#000',
  },
  image: {
    width: '100%',
  },
  adviceBox: {
    padding: DEFAULT_STEP,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Roboto-Light',
    marginBottom: 10,
  },
  descriptionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: 32,
    fontFamily: 'Roboto-Light',
    justifyContent: 'space-between',
  },
}));
