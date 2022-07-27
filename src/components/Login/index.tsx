import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles.css";
import { Container, Bloco1, Bloco2 } from "./styles";
import { BiUserCircle } from "react-icons/bi";
function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container>
      <div>
        <Bloco1></Bloco1>
        {/* <img src="https://portal.ifba.edu.br/barreiras/imagens-campus-barreiras/barreiras160x240px.jpg" alt="Logo do IFBA" /> */}
        <Bloco2>
          <h1 className="title">Sistema de Almoxarifado</h1>
          <h2 className="title">Login</h2>
          <form className="form">
            {/*   <div className="input-container">
              <label>Usuário </label>
              <input type="text" name="uname" required />
            </div> */}

            <div className="wrapper">
              <div className="icon">
                <BiUserCircle />
              </div>
              <input className="input"></input>
            </div>

            <div className="wrapper">
              <div className="icon">
                <BiUserCircle />
              </div>
              <input className="input"></input>
            </div>

            <div className="checkboxSenha">
              <input type="checkbox" className="mostrarsenha" />
              <label htmlFor="checkbox-0">Mostrar Senha</label>
            </div>
            <div className="acesso">
              <Link to="/product">
                <button className="btnAcessar">Acessar</button>
              </Link>
            </div>
          </form>
        </Bloco2>
      </div>
    </Container>
  );
}

export default Login;
