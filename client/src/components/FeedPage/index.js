import React from "react";
//import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import RequireAuth from "../RequireAuth";
import Feed from "./Feed";
import Filters from "./Filters";

const initialFiltersState = {
  level: null,
  language: null,
  test: null,
};

const FeedPage = () => {
  // const { t } = useTranslation();
  const [filters, setFilters] = React.useState(initialFiltersState);

  const updateFilters = (chosenFilters = initialFiltersState) => {
    setFilters({ ...filters, ...chosenFilters });
  };

  return (
    <RequireAuth>
      <Container>
        <Row>
          <Col xs={3}>
            <Filters updateFilters={updateFilters} />
          </Col>
          <Col xs={9}>
            <Feed filters={filters} />
          </Col>
        </Row>
      </Container>
    </RequireAuth>
  );
};

export default FeedPage;
