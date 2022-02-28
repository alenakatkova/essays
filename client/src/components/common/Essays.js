import React from "react";
import EssayCard from "./EssayCard/index";
import { useAuth } from "../../contexts/authProvider";
import { getUserInfo } from "../../api/UserAPI";

const Essays = ({ toRender = [], isDraft = false }) => {
  const [likes, setLikes] = React.useState(null);
  const [favAuthors, setFavAuthors] = React.useState([]);
  const [userEssays, setUserEssays] = React.useState([]);
  let auth = useAuth();

  const getUserData = React.useCallback(async () => {
    const data = await getUserInfo(auth.user);
    setLikes(data.likes);
    setFavAuthors(data.favouriteAuthors);
    setUserEssays(data.essays);
  }, [auth.user]);

  React.useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <>
      {toRender.map((post) => (
        <div key={post._id} className="mb-5">
          <EssayCard
            essay={post}
            isDraft={isDraft}
            likes={likes}
            favAuthors={favAuthors}
            userEssays={userEssays}
            favouritesAuthors={favAuthors}
          />
        </div>
      ))}
    </>
  );
};

export default Essays;
