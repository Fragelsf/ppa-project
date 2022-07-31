import React from "react";

import css from "./styles.module.css";

function MinhasRequisicoes() {
  return (
    <>

      <article>
     
      <table className={css.tableTeste}>
            <thead>
              <tr>
                <th scope="col">Minhas Requisições</th>
                <th scope="col">Data Requisição</th>
                <th scope="col">Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Requisição"> Caneta Bic</td>
                <td data-label="Data"> 31/07/2022 </td>

                <td data-label="Situação"> Em analise
              
                </td>
              </tr>
            </tbody>
          </table>
      </article>
    </>
  );
}

export { MinhasRequisicoes };
