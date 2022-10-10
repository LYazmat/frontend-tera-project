import { Dropdown } from "react-bootstrap";

import "../../styles/userOption.css";

export default function UserOption() {
  return (
    <Dropdown
      className="py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1 w-100"
      drop="up"
      id="dropdown-user"
    >
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-toogle-user"
        className="d-flex align-items-center text-white text-decoration-none m-0 w-100"
      >
        <img
          src="https://github.com/lyazmat.png"
          alt="Foto do Usuário"
          width="28"
          height="28"
          className="rounded-circle me-2"
        />
        <span className="d-none d-sm-inline mx-1 ms-2">Usuário</span>
        <div id="div-menu-toogle-sep" className="text-end w-100"></div>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark" className="text-small shadow">
        <Dropdown.Item href="/#">Configurações</Dropdown.Item>
        <Dropdown.Item href="/#">Perfil</Dropdown.Item>
        <Dropdown.Divider className="bg-secondary" />
        <Dropdown.Item href="/#">Sair</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
