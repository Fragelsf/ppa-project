import React from "react";
import { ReactElement } from "react";
import { Aside } from "../../Aside";
import { Footer } from "../../Footer";
import { Header } from "../../Header";

import css from "./styles.module.css";

interface Props {
  children: ReactElement;
}

function MainTemplate({ children }: Props) {
  return (
    <>
      <Header name={"usuário"} />
      <Aside />
      <Footer />
    </>
  );
}

export { MainTemplate };
