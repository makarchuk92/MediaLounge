import { TypeFeatherIconNames } from "@/types/icon.types"
import { PressableProps } from "react-native"

export interface IButton extends PressableProps{
    className?: string
    icon?: TypeFeatherIconNames
}