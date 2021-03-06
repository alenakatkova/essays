import React from "react";
import { useTranslation } from "react-i18next";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useAuth } from "../../../contexts/authProvider";
import {
  addAuthorToFavourites,
  deleteAuthorFromFavourites,
} from "../../../api/UserAPI";

const AddAuthorToFavourites = ({ isAddedByCurrentUser, authorId }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();

  React.useEffect(() => {
    if (isAddedByCurrentUser !== undefined) {
      setIsAdded(isAddedByCurrentUser);
    }
  }, [isAddedByCurrentUser]);

  const onClick = async () => {
    if (isAdded) {
      await deleteAuthorFromFavourites(authorId, user);
    } else {
      await addAuthorToFavourites(authorId, user);
    }

    setIsAdded(!isAdded);
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        isAdded ? (
          <Tooltip>{t("favAuthor.btnDelete.tooltip")}</Tooltip>
        ) : (
          <Tooltip>{t("favAuthor.btnToAdd.tooltip")}</Tooltip>
        )
      }
    >
      <Button
        style={{
          border: "none",
          margin: "0",
          marginTop: "-7px",
          padding: "0",
          color: "#212529",
        }}
        variant="link"
        onClick={onClick}
      >
        {isAdded ? <BsStarFill /> : <BsStar />}
      </Button>
    </OverlayTrigger>
  );
};

export default AddAuthorToFavourites;
