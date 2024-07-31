import { View, Text } from "react-native";
import React, { FC } from "react";
import { Control } from "react-hook-form";

interface IAuthFields {
    control: Control
    isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = () => {
  return (
    <View>
      <Text>AuthFields</Text>
    </View>
  );
};

export default AuthFields;
