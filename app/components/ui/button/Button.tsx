import { Text, Pressable } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import { IButton } from "./button.interface";
import cn from 'clsx'
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const Button: FC<PropsWithChildren<IButton>> = ({ className, icon, children, ...rest }) => {
    return (
        <Pressable className={cn('self-center mt-3.5', className)} {...rest}>
            <LinearGradient 
            className={cn('w-full py-3 px-8 rounded-2xl items-center', {'flex-row' : !!icon})}
            colors={['#DC3F41', '#a6282b']}>
                {icon && <Feather name={icon} size={18} color='white'/>}
                <Text 
                className={cn('text-white text-center font-medium text-lg', { 'ml-2' : !!icon})}
                >
                    {children}
                </Text>
            </LinearGradient>
        </Pressable>
    );
};

export default Button;
