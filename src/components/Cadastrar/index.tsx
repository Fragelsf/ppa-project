import React from "react";
import { Aside } from "../Aside";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ModalDetalhes } from "../ModalDetalhes";
import css from "./styles.module.css";

import  {btnAcoes} from "styled-components"
import styled from 'styled-components'
function Cadastrar() {
  return (
    <>
      <Header name={"maria"} />
      <Aside />
      <section className={css.section}>
        <article className={css.tableProduct}>
          <table className={css.tableTeste}>
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Produto</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Id"> 27</td>
                <td data-label="Produto"> Pen drive </td>

                <td data-label="Ação">
                  <button className={css.btnAcoes}>Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </article>

        <article>
          <h2 className={css.containerTitle}>Cadastrar Produto</h2>
          <div className={css.containerInput}>
            <label htmlFor="">aaa</label>
            <input className={css.inputCadastro} type="text" placeholder="" />

            <label htmlFor="">aaa</label>
            <input className={css.inputCadastro} type="text" placeholder="" />
            <label htmlFor="">aaa</label>
            <input className={css.inputCadastro} type="text" placeholder="" />
            <label htmlFor="">aaa</label>
            <input className={css.inputCadastro} type="text" placeholder="" /> <label htmlFor="">aaa</label>
            <input className={css.inputCadastro} type="text" placeholder="" /> <label htmlFor="">aaa</label>
            <input className={css.inputCadastro} type="text" placeholder="" />
          </div>
          <article className={css.btn}>

           <button className={css.btnCadastrar}>Cadastrar</button>
          </article>

        </article>

        {/* <ModalDetalhes/> */}
      </section>

      <Footer />
    </>
  );
}
export { Cadastrar };
