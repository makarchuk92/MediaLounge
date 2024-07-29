import Button from "@/components/ui/button/Button";
import Loader from "@/components/ui/Loader";
import { IAuthFormData } from "@/types/auth.interface";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

const Auth = () => {

  const [isReg, setIsReg] = useState(false)
  const isLoading = false
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<IAuthFormData>({
    defaultValues: {
      email: '', password: ''
    }, mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    const { email, password } = data
  }

  return (
    <View className="mx-2 items-center justify-center h-full">
      <View className="w-9/12">
        <Text className="text-center text-white text-4xl font-bold mb-2.5">
          {isReg ? 'Register' : 'Login'}
          </Text>
          {isLoading ? (
            <Loader />
           )
            : (
            <>
            
            <Button onPress={handleSubmit(onSubmit)} icon={"film"}>
                Go to watch
            </Button>
            <Pressable onPress={() => setIsReg(!isReg)} >
              <Text className="text-white opacity-30 text-right  text-base mt-3">
                {isReg ? 'Login' : 'Register'}
              </Text>
            </Pressable>
          </>)} 
      </View>
    </View>
  );
};

export default Auth;
