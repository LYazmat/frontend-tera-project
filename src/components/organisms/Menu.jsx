import React from "react";

import { Col, Nav } from "react-bootstrap";

import { BsFillStarFill } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Col
      xs={12}
      sm={3}
      xl={2}
      className="px-sm-2 px-0 bg-dark d-flex sticky-top"
    >
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <Link
          to="/"
          className="d-flex align-items-center pb-sm-3 pt-sm-3 mb-md-0 mx-auto text-white text-decoration-none"
        >
          <span className="fs-3">
            <span className="d-flex d-sm-none">LOGO.PNG</span>
            <span className="d-none d-sm-inline ps-2">X Cursos</span>
          </span>
        </Link>
        <Nav
          variant="pills"
          className="flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="menu"
        >
          <Nav.Item>
            <Nav.Link to="#" className="px-sm-0 px-2">
              <i className="text-info fs-5 bi bi-globe me-2"></i>
              <span className="ms-1 d-none d-sm-inline">Cursos</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="#" className="px-sm-0 px-2">
              <i className="text-primary fs-5 bi bi-mortarboard-fill me-2"></i>
              <span className="ms-1 d-none d-sm-inline">Meus Cursos</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="#" className="px-sm-0 px-2">
              <BsFillStarFill className="text-warning fs-5 me-2" />
              <span className="ms-1 d-none d-sm-inline">Favoritos</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="#" className="px-sm-0 px-2">
              <i className="text-success fs-5 bi bi-chat-dots-fill me-2"></i>
              <span className="ms-1 d-none d-sm-inline">Mensagens</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <Link
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/lyazmat.png"
              alt="Foto do Usuário"
              width="28"
              height="28"
              className="rounded-circle"
            />
            <span className="d-none d-sm-inline mx-1 ms-2">Usuário</span>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link
                className="dropdown-item"
                to="../templates/configuracoes.html"
              >
                Configurações
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="../templates/perfil.html">
                Perfil
              </Link>
            </li>
            {/*<li><hr className="dropdown-divider"></li>*/}
            <li>
              <Link className="dropdown-item" to="../templates/login.html">
                Sair
              </Link>
            </li>
          </ul>
          <Link
            to="/login"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <i className="text-warning fs-5 bi bi-box-arrow-in-right me-2"></i>
            <span className="d-none d-sm-inline mx-1 ms-2">Entrar</span>
          </Link>
        </div>
      </div>
    </Col>
  );
}
