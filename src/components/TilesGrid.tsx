import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { KidData } from '../types/datas';
import { capitalizeFirstLetter } from '../helpers/helpers';

interface TileData {
  healthParam: string;
  value: string;
  timestamp: string;
}

const tilesBackgroundColors = {
  weight: '#FFF5DC',
  diaper: '#EFF1FF',
  feeding: '#FFEEE7',
  sleep: '#F8EEFF',
};

const TileGrid = ({ selectedKid }: { selectedKid: KidData }) => {
  const tilesData = useMemo(() => Object.entries(selectedKid.healthData).map(([key, { value, timestamp }]) => ({
    healthParam: key,
    value,
    timestamp,
  })), [selectedKid.healthData]);

  const renderTile = ({ item }: { item: TileData }) => (
    <TouchableOpacity style={[styles.tile, { backgroundColor: tilesBackgroundColors[item.healthParam as never] }]}>
      <Text style={styles.title}>{capitalizeFirstLetter(item.healthParam)}</Text>
      <Text style={styles.value}>{item.value}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tilesData}
        renderItem={renderTile}
        keyExtractor={item => item.healthParam}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: -10,

  },
  tile: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    width: '100%',
    color: '#000',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
    marginBottom: 20,
  },
  value: {
    alignSelf: 'flex-start',
    flex: 1,
    width: '100%',
    color: '#000',
    fontFamily: 'Roboto-Light',
    fontSize: 32,
    lineHeight: 38,
    marginBottom: 20,
  },
  timestamp: {
    width: '100%',
    alignSelf: 'flex-end',
    fontSize: 10,
    color: '#878585',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    padding: 0,
    margin: 0,
  },
});

export default TileGrid;
