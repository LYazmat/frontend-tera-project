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
            <Button
              type="button"
              variant="secondary"
              className="float-end mx-2"
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </div>
    </Default>
  );
}
