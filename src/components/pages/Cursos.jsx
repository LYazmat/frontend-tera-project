import Default from "../templates/Default";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

export default function CursoIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
  };

  return (
    <Default my={false}>
      <Row>
        <Col xs={12} md={6} lg={4} className="pt-3 mx-auto">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                id="pesquisar"
                name="pesquisar"
                type="text"
                placeholder="Pesquisar"
                aria-label="Caixa de busca"
              />
              <Button id="btn-pesquisar" as={InputGroup.Text}>
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Row id="content" className="overflow-auto mx-auto">
          <Col>
            <span>Teste</span>
          </Col>
        </Row>
      </Row>
    </Default>
  );
}
