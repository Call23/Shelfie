import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUsers";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const route = useRouter();

  useEffect(() => {
    if (user && authChecked !== null) {
      route.replace("/profile");
    }
  }, [user, authChecked]);

  if (user || !authChecked) {
    return <ThemedLoader />;
  }
  return children;
};

export default GuestOnly;
