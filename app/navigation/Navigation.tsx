import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import PrivateNavigate from "./PrivateNavigate";




const Navigation: FC  = () => {
  return (
    <NavigationContainer>
        <PrivateNavigate />
       
    </NavigationContainer>
    
    
  );
};

export default Navigation;
