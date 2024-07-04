import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

const RestaurantCard = ({ data }) => {
  const Restaurant = data.item;

  const ratingStyle = {
    color: Restaurant.rating < 4.5 ? 'black' : '#FF8C00',
  };

  return (
    <Link href={{ pathname: `${Restaurant.id}`, params: { id: Restaurant.id } }} asChild>
      <Pressable className="mt-5">
        <View>
          <Image
            className="h-[180px] w-full rounded-lg"
            source={{ uri: Restaurant.profileImage }}
            resizeMode="cover"
          />
          <View className="absolute bottom-2 right-2 rounded-lg bg-white">
            <Text className="px-2 py-1 text-sm font-semibold">{Restaurant.delivery} min</Text>
          </View>
        </View>

        <View className="mt-2 flex flex-row items-center justify-between">
          <Text className="text-base font-semibold">{Restaurant.name}</Text>
          <View className="flex flex-row items-center gap-x-2">
            <FontAwesome name="star" size={17} color={ratingStyle.color} />
            <Text className="font-bold">{Restaurant.rating}</Text>
          </View>
        </View>
        <Text className="text-sm">{Restaurant.price} €</Text>
      </Pressable>
    </Link>
  );
};

export default RestaurantCard;
