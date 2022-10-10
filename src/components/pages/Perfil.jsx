import Default from "../templates/Default";
import Avatar from "../atoms/Avatar";
import InputList from "../organisms/InputList";
import { Row, Col, Button, Form } from "react-bootstrap";
import { BsCameraFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

export default function Perfil() {
  const personalFields = [
    [
      {
        xs: "12",
        md: "6",
        className: "mb-3",
        title: "Primeiro Nome",
        name: "firstname",
        type: "text",
        "aria-describedby": "",
      },
      {
        xs: "12",
        md: "6",
        className: "mb-3",
        title: "Último Nome",
        name: "lastname",
        type: "text",
        "aria-describedby": "",
      },
    ],
    [
      {
        xs: "12",
        className: "mb-3",
        title: "Email",
        name: "email",
        type: "email",
        "aria-describedby": "",
      },
    ],
    [
      {
        xs: "12",
        md: "6",
        className: "mb-3",
        title: "Celular",
        name: "celphone",
        type: "number",
        "aria-describedby": "",
      },
      {
        xs: "12",
        md: "6",
        className: "mb-3",
        title: "Telefone",
        name: "telphone",
        type: "number",
        "aria-describedby": "",
      },
    ],
  ];

  return (
    <Default>
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto border rounded-3 p-5 mt-4">
        <Form>
          <div className="mb-4 text-center">
            <Avatar width="224" height="224" className="rounded-circle mb-3" />
            <br />
            <Button type="button" variant="white">
              <BsCameraFill />
            </Button>
            <Button type="button" variant="white" title="Excluir Foto">
              <FaTrashAlt />
            </Button>
          </div>
          {personalFields.map((row, i) => {
            return <InputList row={row} key={`personalfield_${i}`} />;
          })}
          <Row>
            <Col className="col-10 col-sm-8 col-lg-6 col-xl-4 mb-3">
              <Form.Label htmlFor="cep">CEP</Form.Label>
              <Form.Control type="text" id="cep" aria-describedby="" />
              <div id="cepError" className="form-text text-danger"></div>
            </Col>
            <Col className="col-2">
              <Form.Label htmlFor="find-cep">&nbsp;</Form.Label>
              <div>
                <Button variant="light" id="find-cep">
                  <i className="bi bi-search"></i>
                </Button>
              </div>
            </Col>
          </Row>
          <div className="row">
            <div className="col-9 col-sm-10 mb-3">
              <label htmlFor="logradouro" className="form-label">
                Logradouro
              </label>
              <input
                type="text"
                className="form-control"
                id="logradouro"
                aria-describedby=""
              />
            </div>
            <div className="col-3 col-sm-2 mb-3">
              <label htmlFor="number" className="form-label">
                Número
              </label>
              <input
                type="text"
                className="form-control"
                id="numero"
                aria-describedby=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-5 mb-3">
              <label htmlFor="neighborhood" className="form-label">
                Bairro
              </label>
              <input
                type="text"
                className="form-control"
                id="neighborhood"
                aria-describedby=""
              />
            </div>
            <div className="col-9 col-sm-5 mb-3">
              <label htmlFor="city" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                aria-describedby=""
              />
            </div>
            <div className="col-3 col-sm-2 mb-3">
              <label htmlFor="uf" className="form-label">
                Estado
              </label>
              <input
                type="text"
                className="form-control"
                id="uf"
                aria-describedby=""
              />
            </div>
          </div>
          <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping-insta">
              <i className="bi bi-instagram" title="Instagram"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="https://"
              aria-label="Username"
              aria-describedby="addon-wrapping-insta"
            />
          </div>
          <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping-git">
              <i className="bi bi-github" title="Github"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="https://"
              aria-label="Username"
              aria-describedby="addon-wrapping-git"
            />
          </div>
          <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping-linkedin">
              <i className="bi bi-linkedin" title="Linkedin"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="https://"
              aria-label="Username"
              aria-describedby="addon-wrapping-linkedin"
            />
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-success float-end">
              Salvar
            </button>
            <button type="button" className="btn btn-secondary float-end mx-2">
              Cancelar
            </button>
          </div>
        </Form>
      </div>
    </Default>
  );
}
