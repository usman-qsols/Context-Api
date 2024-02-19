import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log("User", user?.username);
  return <div>Hllo {user?.username}</div>;
};

export default Profile;
