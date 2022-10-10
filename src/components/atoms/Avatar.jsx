import React from "react";

export default function Avatar(props) {
  return (
    <img
      src="https://github.com/lyazmat.png"
      alt="Foto do Usuário"
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
}
