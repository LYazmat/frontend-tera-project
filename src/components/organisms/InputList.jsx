import { Row, Col, Form } from "react-bootstrap";

export default function InputList(props) {
  return (
    <Row>
      {props.row.map((col) => (
        <Col
          xs={col.xs}
          sm={col.sm}
          md={col.md}
          lg={col.lg}
          xl={col.xl}
          className={col.className}
          key={`id_${col.name}`}
        >
          <Form.Label htmlFor={col.name}>{col.title}</Form.Label>
          <Form.Control
            type={col.type}
            id={`id_${col.name}`}
            aria-describedby={col["aria-describedby"]}
          />
        </Col>
      ))}
    </Row>
  );
}
