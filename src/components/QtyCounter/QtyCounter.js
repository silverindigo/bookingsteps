import React from "react";
import PropTypes from "prop-types";
import { Button, Row, Col } from "react-bootstrap";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function QtyCounter(props) {
  const { stateKey, value, handleChangeField } = props;
  return (
    <Row>
      <Col className="px-2">
        <Button
          className="btn-circular"
          variant="outline-secondary"
          size="sm"
          onClick={e => {
            const newValue = value - 1 >= 0 ? value - 1 : value;
            handleChangeField(stateKey, newValue);
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </Col>
      <Col className="px-2">
        <span className="qty-number">{value}</span>
      </Col>
      <Col className="px-2">
        <Button
          className="btn-circular"
          variant="outline-primary"
          size="sm"
          onClick={e => {
            const newValue = value + 1;
            handleChangeField(stateKey, newValue);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Col>
    </Row>
  );
}

QtyCounter.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func
};

export default QtyCounter;
