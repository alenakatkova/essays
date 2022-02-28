import React from "react";
import { useTranslation } from "react-i18next";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useAuth } from "../../../contexts/authProvider";
import { likeEssay, dislikeEssay } from "../../../api/UserAPI";

const Like = ({ isLikedByCurrentUser, essayId }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();
  React.useEffect(() => {
    if (isLikedByCurrentUser !== undefined) setIsLiked(isLikedByCurrentUser);
  }, [isLikedByCurrentUser]);

  const onClick = async () => {
    if (isLiked) {
      await dislikeEssay(essayId, user);
    } else {
      await likeEssay(essayId, user);
    }

    setIsLiked(!isLiked);
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{t("essayLikes.btn.tooltip")}</Tooltip>}
    >
      <Button
        onClick={onClick}
        style={{ marginRight: 5, border: "none" }}
        variant="outline-secondary"
      >
        {isLiked ? <BsHeartFill /> : <BsHeart />}
      </Button>
    </OverlayTrigger>
  );
};

export default Like;
