import { useState, createContext } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";

import { useUser } from "../hooks/useUsers";

export const BooksContext = createContext();

const DATABASE_ID = "6967b4f70021105379b5";
const TABLE_ID = "books";

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const { user } = useUser();
  async function fetchBooks() {
    try {
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function fetchBookById(id) {
    try {
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function deleteBook(id) {
    try {
    } catch (error) {
      throw Error(error.message);
    }
  }

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
