import React from "react";
import { getUserInfo } from "../../api/UserAPI";
import { useAuth } from "../../contexts/authProvider";
import { useTranslation } from "react-i18next";
import { Tab, Row, Col, Nav, Container, Card } from "react-bootstrap";
import MyEssays from "./MyEssays";
import Drafts from "./Drafts";
import FavAuthorsEssays from "./FavAuthorsEssays";
import Likes from "./Likes";
import RequireAuth from "../RequireAuth";

const ProfilePage = () => {
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

  return (
    <RequireAuth>
      <Container>
        <Card body className="mb-4">
          {t("profile.youAreLoggedInAs")}: {user.username}
        </Card>
        <Tab.Container id="left-tabs-example" defaultActiveKey="myEssays">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="myEssays">
                    {t("profile.tabs.myEssays")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="drafts">
                    {t("profile.tabs.drafts")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="essaysOfFavouriteAuthors">
                    {t("profile.tabs.essaysOfFavouriteAuthors")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bookmarks">
                    {t("profile.tabs.likes")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="myEssays">
                  <MyEssays userId={user._id} />
                </Tab.Pane>
                <Tab.Pane eventKey="drafts">
                  <Drafts drafts={user.drafts} />
                </Tab.Pane>
                <Tab.Pane eventKey="essaysOfFavouriteAuthors">
                  <FavAuthorsEssays userId={user._id} />
                </Tab.Pane>
                <Tab.Pane eventKey="bookmarks">
                  <Likes userId={user._id} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </RequireAuth>
  );
};

export default ProfilePage;
