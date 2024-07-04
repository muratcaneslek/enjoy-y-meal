import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import Detail from '~/components/Detail';

const DetailScreen = () => {
  const { id } = useLocalSearchParams();
  console.log(id);

  return <Detail></Detail>;
};

export default DetailScreen;
