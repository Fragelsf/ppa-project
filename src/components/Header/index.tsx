import React, { HTMLAttributes } from "react";
import { Container } from "../../templates/Default/styles";

import css from "./styles.module.css";

interface DadosProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}
function Header(props: DadosProps) {
  const {
    name,
    ...rest
  } = props;
  return (
    <>
      <header className={css.header}>
        <article>
          <img className={css.logoIFBA} src="src\assets\logoIFBA.png" alt="Logo IFBA" />
        </article>
        <article>
          <p className={css.user}>Olá, {name}</p>
        </article>

      </header>
    </>
  );
}

export { Header };
