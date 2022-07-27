import React from "react";
import { Aside } from "../Aside";
import { Footer } from "../Footer";
import { Header } from "../Header";

import { BiSearchAlt } from "react-icons/bi";

import css from "./styles.module.css";

function HomeUser() {
  return (
    <>
      <Header name={"maria"} />
      <Aside />

      <main>
        <article className={css.wrapper}>
          {/* <div className="icon"><BiSearchAlt /></div> */}
          <input className={css.inputHome} placeholder="Buscar Produto Desejado"></input>
        </article>
      </main>

      <Footer />
    </>
  );
}
export { HomeUser };
