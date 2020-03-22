import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import {
  faLongArrowAltUp,
  faLongArrowAltDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";
export default function NavigationProgress() {
  return (
    <Container fluid className="navigation-progress p-4">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Row>
            <Col>
              <div>60% completed</div>
              <ProgressBar now={60} />
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <Button>
                  <FontAwesomeIcon icon={faLongArrowAltUp} />
                </Button>
                <span className="px-1"></span>
                <Button>
                  <FontAwesomeIcon icon={faLongArrowAltDown} />
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
