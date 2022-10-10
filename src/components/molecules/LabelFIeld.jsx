import React from "react";

export default function LabelFIeld(props) {
  return (
    <Col
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      className={props.className}
      key={`id_${props.name}`}
    >
      <Form.Label htmlFor={props.name}>{props.title}</Form.Label>
      <Form.Control
        type={props.type}
        id={`id_${props.name}`}
        aria-describedby={props["aria-describedby"]}
      />
    </Col>
  );
}
