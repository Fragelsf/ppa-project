import React from "react";
import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";


function ResultadoBusca(){
    return (
        <>
          <Header name={"maria"} />
          <Aside />
          <ResultadoBusca />
          <Footer />
        </>
      );
}

export {ResultadoBusca};