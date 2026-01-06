import { useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";

const ThemedView = ({ style, safe = false, ...props }) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const baseStyle = {
    backgroundColor: theme.background,
  };

  const safeStyle = safe
    ? {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    : {};

  return <View style={[baseStyle, safeStyle, style]} {...props} />;
};

export default ThemedView;
