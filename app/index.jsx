import { StyleSheet, Text } from "react-native";

import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading App.</ThemedText>
      <Spacer />
      <Link style={styles.links} href="./Login">
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link style={styles.links} href="./Register">
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link style={styles.links} href="./profile">
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },

  links: {
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
