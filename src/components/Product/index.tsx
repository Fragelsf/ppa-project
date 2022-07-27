import React, { HTMLAttributes } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import css from "./styles.module.css";

import { useState } from "react";

function Product(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className={css.main}>
        <div className={css.title}>
          <h3 className={css.descricao}>Produtos Almoxarifado</h3>

          <div className="wrapper">
            <div className="icon">
              <BiSearchAlt />
            </div>
            <input className="input" placeholder="Buscar item" />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Produto</th>
              <th scope="col">Departamento</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td data-label="Id"> 1</td>
              <td data-label="Produto"> Apagador </td>
              <td data-label="Departamento"> material escolar</td>
              <td data-label="Quantidade"> 1 </td>
              <td data-label="Ação">
                <Link to="/requisitar">
                  <button className={css.btnAcoes}>Requisitar</button>
                </Link>
                <Link to="/editar">
                  <button className={css.btnAcoes}>Editar</button>
                </Link>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export { Product };
