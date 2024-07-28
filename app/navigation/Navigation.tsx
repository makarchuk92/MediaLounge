import { View, Text } from "react-native";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { userRoutes } from "./user.routes";


const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC  = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
           
        >
            {userRoutes.map( route => (
                <Stack.Screen key={route.name} {...route}/>
            ))}
        </Stack.Navigator>
    </NavigationContainer>
    
    
  );
};

export default Navigation;
