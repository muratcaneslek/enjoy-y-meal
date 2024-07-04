import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RestaurantCard from '~/components/restaurantCard';
import { dummyRestaurantsData } from '~/assets/Data/restaurant';

const HomeScreen = () => {
  return (
    <SafeAreaView className="mt-6 flex-1 bg-white p-4">
      <View className="mb-2 flex-row justify-between">
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
          <Text className="ml-2">Your Adress Here</Text>
        </View>
      </View>

      <FlatList
        data={dummyRestaurantsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <Text className="mb-2 mt-4 text-lg font-bold">All Restaurant And Stores</Text>
        )}
        renderItem={(item) => <RestaurantCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
