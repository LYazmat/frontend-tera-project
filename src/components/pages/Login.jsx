import React from "react";
import Default from "../templates/Default";
import { Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Default>
      <Row>
        <Col xs={10} md={8} lg={6} xl={5} xxl={4} className="pt-3 mx-auto">
          <Card>
            <Card.Body>
              <h4 className="text-center py-3">LOGIN</h4>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Usuário</InputGroup.Text>
                  <Form.Control
                    type="text"
                    id="username"
                    placeholder="Informe seu usuário"
                    aria-label="Nome de usuário"
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>&nbsp;Senha&nbsp;</InputGroup.Text>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Senha"
                    aria-label="Senha"
                  ></Form.Control>
                </InputGroup>
                <div id="login-error"></div>
                <div className="text-end">
                  <Button type="submit" variant="success" id="btn-login">
                    Entrar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Default>
  );
}
