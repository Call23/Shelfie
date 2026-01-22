import { Client, Account, Avatars, Databases } from "react-native-appwrite";
export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io.v1")
  .setProject("69297c29000f853bdd77")
  .setEndpoint("https://fra.cloud.appwrite.io/v1");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
