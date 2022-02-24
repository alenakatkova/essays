import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  BsBookmark,
  // BsBookmarkFill,
  BsHeart,
  // BsHeartFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import RequireAuth from "../RequireAuth";

// { "_id": "6202c1f437cf3ae3173dc918",
//     "minAmountOfWords": 10,
//     "language": "french",
//     "test": "delf",
//     "timingInMinutes": 2,
//     "topic": "Circonscription de Calare",
//     "user_id": "6202c18f37cf3ae3173dc916",
//     "title": "Lorem",
//     "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vulputate mauris, in varius nulla elementum at. Praesent vel mauris viverra, lobortis eros sit amet, lobortis arcu. Nunc volutpat interdum nulla, vitae tristique ex pretium sit amet. In in tortor nibh. Cras mattis nisl et augue cursus, nec fringilla felis scelerisque. Nam sagittis, purus efficitur mattis semper, turpis nulla pretium eros, at auctor libero metus at metus. Curabitur accumsan malesuada purus, et commodo erat rhoncus auctor. Suspendisse vitae ullamcorper urna. Morbi pulvinar, turpis in dapibus pharetra, libero ante feugiat nibh, quis vestibulum dolor ante vitae mi. Nulla dignissim, urna non malesuada blandit, mi velit pellentesque elit, vel scelerisque arcu erat nec nisi. Vivamus nunc felis, ultrices sit amet neque a, faucibus scelerisque neque. Donec tempor blandit elit, sed dictum ex volutpat at. Proin porttitor sollicitudin mauris ut cursus. Nam sollicitudin id leo pulvinar laoreet. Phasellus quis eros at mi malesuada gravida a quis nisl. Sed ac lorem facilisis, rhoncus dui ac, pretium tellus.\n\nMaecenas urna sapien, tristique a velit eu, gravida tincidunt ipsum. Donec feugiat finibus erat, quis fringilla ipsum rutrum vel. Donec condimentum id mi vel ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse blandit massa vitae quam ullamcorper, eu porttitor leo egestas. In vitae purus vitae massa sagittis ultricies sed quis felis. Fusce sodales eu enim maximus eleifend.\n\nProin sit amet arcu id sem consectetur mollis sed a nisi. In nec ex justo. Praesent sit amet risus nisi. Sed interdum hendrerit cursus. Mauris eget suscipit dolor, eu efficitur magna. Quisque in lacus volutpat, euismod neque nec, gravida augue. Duis dictum placerat lectus at tincidunt. Nullam et risus et purus tempus tempus. Fusce nisl metus, placerat vel nulla sed, egestas dignissim dui. Aenean at aliquet sapien, quis pretium dui. Fusce elementum tristique porta.\n\nQuisque convallis pulvinar metus, a dapibus leo. Curabitur suscipit tortor ut massa mattis, sollicitudin tincidunt ante dictum. Nullam purus dolor, condimentum id tincidunt non, scelerisque ut leo. Donec vehicula rutrum dignissim. Fusce et leo tincidunt, ornare nulla eget, imperdiet massa. Suspendisse vel lobortis odio. Vivamus vestibulum felis quis mi semper, vitae fermentum diam aliquet. Pellentesque mattis nisi quis libero posuere ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent convallis lacus vitae augue accumsan commodo. Nullam aliquet est in nulla imperdiet, eu pulvinar nibh consequat. Cras sollicitudin nunc non libero laoreet, non convallis leo placerat.\n\nSed tempus nisl neque, nec finibus est sollicitudin eu. Duis iaculis dui mi, elementum pulvinar nibh scelerisque in. Aliquam fermentum risus ut ultrices ullamcorper. Quisque eget turpis sed augue consequat vulputate. Nam molestie velit in lacus sodales imperdiet. Integer ut orci viverra, vestibulum tellus sit amet, tempor lorem. Curabitur eleifend tortor nec ultrices ullamcorper. Sed vel tempor turpis. Donec eleifend nisi dolor, vel varius sem vestibulum at. Morbi dignissim euismod arcu, in blandit augue semper efficitur. Aliquam laoreet congue sagittis.",
//     "createdAt": "2022-02-08T19:18:12.776Z",
//     "updatedAt": "2022-02-08T19:18:12.776Z",
//     "__v": 0
// }

const EssayCard = ({ essay }) => {
  const { t } = useTranslation();
  const { _id, title, test, user_id, body, createdAt } = essay;
  const navigate = useNavigate();

  const openEssay = () => {
    navigate(`/essays/${_id}`);
  };

  return (
    <Card>
      <Card.Header>
        <div className="row justify-content-between">
          <div className="col d-flex align-items-center">{user_id}</div>
          <div className="col d-flex flex-row-reverse align-items-center">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>{t("saveButton.toEssayBookmarks.tooltip")}</Tooltip>
              }
            >
              <Button style={{ border: "none" }} variant="outline-secondary">
                <BsBookmark />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>{t("saveButton.toEssayLikes.tooltip")}</Tooltip>
              }
            >
              <Button
                style={{ marginRight: 5, border: "none" }}
                variant="outline-secondary"
              >
                <BsHeart />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {t("essayCard.test")}: {test}
        </Card.Subtitle>
        <Card.Text style={{ whiteSpace: "pre-line" }}>{body}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {createdAt},{" "}
        <Button onClick={openEssay}>{t("essayCard.comments")}</Button>
      </Card.Footer>
    </Card>
  );
};

export default EssayCard;
