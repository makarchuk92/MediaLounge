import { TypeFeatherIconNames } from "@/types/icon.types";
import { TypeRootStackParamList } from '@/navigation/navigation.types';

export interface IMenuItem {
    iconName: TypeFeatherIconNames
    path: keyof TypeRootStackParamList
}