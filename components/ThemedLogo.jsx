import { Image, useColorScheme } from "react-native";
import React from "react";
import light_logo from "../assets/logo_light.png";
import dark_logo from "../assets/logo_dark.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? dark_logo : light_logo;
  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
