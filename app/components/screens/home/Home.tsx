import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { useTypeNavigation } from "@/hooks/useTypeNavigation";

const Home: FC = () => {

  const {navigate} = useTypeNavigation()

  return (
    <View className="mt-12">
      <Text>Home</Text>
        <Pressable onPress={() => navigate('Auth')}>
          <Text>Go to login</Text>
        </Pressable>
    </View>
  );
};

export default Home;
