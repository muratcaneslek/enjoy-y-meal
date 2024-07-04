import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

const RestaurantCard = ({ data }) => {
  const ratingStyle = {
    color: data.item.rating < 4.5 ? 'black' : '#FF8C00',
  };

  return (
    <Pressable className="mt-5">
      <View>
        <Image
          className="h-[180px] w-full rounded-lg"
          source={{ uri: data.item.profileImage }}
          resizeMode="cover"
        />
        <View className="absolute bottom-2 right-2 rounded-lg bg-white">
          <Text className="px-2 py-1 text-sm font-semibold">{data.item.delivery} min</Text>
        </View>
      </View>

      <View className="mt-2 flex flex-row items-center justify-between">
        <Text className="text-base font-semibold">{data.item.name}</Text>
        <View className="flex flex-row items-center gap-x-2">
          <FontAwesome name="star" size={17} color={ratingStyle.color} />
          <Text className="font-bold">{data.item.rating}</Text>
        </View>
      </View>
      <Text className="text-sm">{data.item.price} €</Text>
    </Pressable>
  );
};

export default RestaurantCard;
