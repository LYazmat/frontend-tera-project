import React from "react";

// src="https://github.com/lyazmat.png"

export default function Avatar(props) {
  return (
    <img
      src="https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"
      alt="Foto do Usuário"
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
}
