import React, { useState } from "react";
import Default from "../templates/Default";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Alert,
} from "react-bootstrap";

async function createUser(credentials) {
  return fetch("http://localhost:8080/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function CreateUser() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      const token = await createUser({
        email,
        password,
      });
      console.log(token);
    } else {
      setAlert(<Alert variant="danger">Deu ruim!</Alert>);
    }
    // !!token && navigate("/");
  };

  return (
    <Default>
      <Row>
        <Col xs={10} md={8} lg={6} xl={5} xxl={4} className="pt-3 mx-auto">
          <Card>
            <Card.Body>
              <h4 className="text-center py-3">NOVO USUÁRIO</h4>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="email"
                    id="username"
                    placeholder="Informe seu email"
                    aria-label="Email de usuário"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="password"
                    id="password"
                    placeholder="Senha"
                    aria-label="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3 input-group-sm">
                  <InputGroup.Text>Confirmar</InputGroup.Text>
                  <Form.Control
                    required
                    type="password"
                    id="confirm-password"
                    placeholder="Confirme a senha"
                    aria-label="Confirme a senha"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  ></Form.Control>
                </InputGroup>
                <div id="create-error">{alert}</div>
                <div className="text-end">
                  <Button type="submit" variant="success" id="btn-cadastrar">
                    Cadastrar
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
