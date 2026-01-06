import { useColorScheme, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../constants/colors";

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.uiBackground,
        },
        styles.card,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 5,
  },
});
