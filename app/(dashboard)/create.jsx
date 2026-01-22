import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useBooks } from "../../hooks/useBooks";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { createBook } = useBooks();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) return;
    setLoading(true);
    await createBook({ title, author, description });

    // reset fields
    setAuthor("");
    setDescription("");
    setTitle("");

    // redirect user
    router.replace("/books");

    // reset loading
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText style={styles.heading} title={true}>
          Add a New Book.
        </ThemedText>
        <Spacer />

        <ThemedTextInput
          placeholder="Book title"
          style={styles.input}
          onChangeText={setTitle}
          value={title}
        />
        <Spacer />

        <ThemedTextInput
          placeholder="Author"
          style={styles.input}
          onChangeText={setAuthor}
          value={author}
        />
        <Spacer />

        <ThemedTextInput
          placeholder="Book description"
          style={styles.multiline}
          onChangeText={setDescription}
          value={description}
          multiline={true}
        />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: "#fff" }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
});
