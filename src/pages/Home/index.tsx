import React from "react";
import { useNavigate } from "react-router-dom";
import { Aside } from "../../components/Aside";
import Button from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

function Home() {
  return (
    <>
      <Header name={"maria"} />
      <Aside />
      <Product />
      <Footer />
    </>
  );
}
export { Home };
