import Default from "../templates/Default";
import Avatar from "../atoms/Avatar";
import InputList from "../organisms/InputList";
import SociaField from "../molecules/SociaField";

import { Row, Col, Button, Form } from "react-bootstrap";
import { BsCameraFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

import {
  locationFields,
  personalFields,
  socialFields,
} from "./fields/fieldsPerfil";

export default function Perfil() {
  return (
    <Default>
      <div className="col-12 col-md-10 col-xl-6 mx-auto border rounded-3 p-5 mt-4">
        <Form>
          <div className="mb-4 text-center">
            <Avatar width="150" height="150" className="rounded-circle mb-3" />
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
            <Form.Group as={Col} xm="10" sm="8" lg="6" xl="4" className="mb-3">
              <Form.Label className="small" htmlFor="cep">
                CEP
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                id="cep"
                aria-describedby=""
              />
              <div id="cepError" className="form-text text-danger"></div>
            </Form.Group>
            <Col className="col-2">
              <Form.Label htmlFor="find-cep">&nbsp;</Form.Label>
              <div>
                <Button size="sm" variant="light" id="find-cep">
                  <i className="bi bi-search"></i>
                </Button>
              </div>
            </Col>
          </Row>
          {locationFields.map((row, i) => {
            return <InputList row={row} key={`locationfield_${i}`} />;
          })}
          {socialFields.map((row, i) => {
            return <SociaField row={row} key={`socialfield_${i}`} />;
          })}
          <div className="mt-2">
            <Button type="submit" variant="success" className="float-end">
              Salvar
            </Button>
          </div>
        </Form>
      </div>
    </Default>
  );
}
