import React from "react";
import { getUserInfo } from "../api/UserAPI";
import { useAuth } from "../contexts/authProvider";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = React.useState({});
  let auth = useAuth();
  const { t } = useTranslation();

  const getUserData = React.useCallback(async () => {
    const data = await getUserInfo(auth.user);
    setUser(data);
  }, [auth.user]);

  React.useEffect(() => {
    getUserData();
  }, [getUserData]);

  return <div>{user.username}</div>;
};

export default Profile;
