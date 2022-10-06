import React from "react";

export default function Menu() {
  return (
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <a
          href="#"
          className="d-flex align-items-center pb-sm-3 pt-sm-3 mb-md-0 mx-auto text-white text-decoration-none"
        >
          <span className="fs-3">
            <span className="d-flex d-sm-none">LOGO.PNG</span>
            <span className="d-none d-sm-inline ps-2">X Cursos</span>
          </span>
        </a>
        <ul
          className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a
              href="../templates/cursooff.html"
              className="nav-link px-sm-0 px-2"
            >
              <i className="text-info fs-5 bi bi-globe me-2"></i>
              <span className="ms-1 d-none d-sm-inline">Cursos</span>
            </a>
          </li>
        </ul>
        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <a
            href="../templates/login.html"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <i className="text-warning fs-5 bi bi-box-arrow-in-right me-2"></i>
            <span className="d-none d-sm-inline mx-1 ms-2">Entrar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
