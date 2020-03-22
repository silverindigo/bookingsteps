import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
export default function FieldSection(props) {
  return <div className="field-section p-4 my-4">{props.children}</div>;
}
