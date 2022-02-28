import React from "react";
import EssayCard from "./EssayCard/index";
import { useAuth } from "../../contexts/authProvider";
import { useTranslation } from "react-i18next";
import { getUserInfo } from "../../api/UserAPI";

const Essays = ({ toRender = [], isDraft = false, isMyEssay = false }) => {
  const [likes, setLikes] = React.useState(null);
  const [favAuthors, setFavAuthors] = React.useState([]);
  let auth = useAuth();

  const getUserData = React.useCallback(async () => {
    const data = await getUserInfo(auth.user);
    setLikes(data.likes);
    setFavAuthors(data.favouriteAuthors);
  }, [auth.user]);

  React.useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <>
      {likes && (
        <div>
          {toRender.map((post) => (
            <div key={post._id} className="mb-5">
              <EssayCard
                essay={post}
                isDraft={isDraft}
                isMyEssay={isMyEssay}
                likes={likes}
                favAuthors={favAuthors}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Essays;
