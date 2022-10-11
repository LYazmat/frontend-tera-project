import { Col, Form } from "react-bootstrap";

export default function LabelFIeld(props) {
  return (
    <Col
      xs={props.col.xs}
      sm={props.col.sm}
      md={props.col.md}
      lg={props.col.lg}
      xl={props.col.xl}
      className={props.col.className}
      key={`id_${props.col.name}`}
    >
      <Form.Label htmlFor={props.col.name}>{props.col.title}</Form.Label>
      <Form.Control
        type={props.col.type}
        id={`id_${props.col.name}`}
        aria-describedby={props["aria-describedby"]}
      />
    </Col>
  );
}
