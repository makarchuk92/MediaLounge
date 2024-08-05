import { View, Text } from "react-native";
import React, { FC } from "react";
import { Control } from "react-hook-form";
import Field from "@/components/ui/form-elements/field/Field";


interface IAuthFields {
    control: Control<IAuthFormData>
    isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({control, isPassRequired}) => {
  return (
    <>
      <Field<IAuthFields> control={control} name='email'  />
    </>
  );
};

export default AuthFields;
