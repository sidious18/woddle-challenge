import React, { Suspense } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import withStyles from '../helpers/withStyles';
import Loader from '../components/Loader';

interface ScreenWrapperProps {
  children: React.ReactNode;
}

export const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const renderChild: ListRenderItem<React.ReactNode> = ({ item }) => (<View style={styles.screenItem}>{item}</View>);

  return (
    <Suspense fallback={<Loader />}>
      <View style={styles.container}>
        <FlatList
          data={[children]} // передаємо дочірні елементи у FlatList як дані
          renderItem={renderChild}
          keyExtractor={(_, index) => index.toString()} // унікальний ключ для кожного дочірнього елементу
        />
      </View>
    </Suspense>
  );
};

const styles = withStyles((appStyles) => ({
  screenItem: {
    marginBottom: 40,
  },
  container: {
    backgroundColor: appStyles.primaryBackgroundColor,
    flex: 1,
    justifyContent: 'center',
  },
}));
