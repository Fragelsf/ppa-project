import React from "react";
import { Aside } from "../Aside";
import { Header } from "../Header";
import { Button, useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import css from "./styles.module.css";

interface DadosProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  rua: string;
  bairro: string;
  cidade: string;
  nCasa: number;
  pagamento: string;
  frete: string;
  vTotal: number;
}

function ResultadoBusca(props: DadosProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    name,
    email,
    cpf,
    phone,
    rua,
    bairro,
    cidade,
    nCasa,
    pagamento,
    frete,
    vTotal,
    ...rest
  } = props;
  return (
    <>
      <Header name={"maria"} />
      <Aside />

      <section className={css.section}>
        <h1>Resultados para a busca de "...."</h1>
        <article className={css.tableProduct}>
          <table className={css.tableTeste}>
            <thead>
              <tr>
                <th scope="col">Produto</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Status</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Produto"> Caneta Bic </td>
                <td data-label="Id"> 27</td>
                <td data-label="Produto"> Disponivel </td>

                <td data-label="Ação">
                  {/* <button className={css.btnAcoes}>Ver descrição</button> */}
                  <Button className={css.btnAcoes} onClick={onOpen}>
                    Ver Descrição
                  </Button>
                  <Button className={css.btnAcoes} onClick={onOpen}>
                    Requisitar
                  </Button>

                  {/* <button className={css.btnAcoes}>Requisitar</button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </article>

              <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className={css.overplay}/>
        <ModalContent className={css.containerModal}>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalBody>
            <article className={css.card}>
          <ModalCloseButton />

              <h3 className={css.title}>Detalhes do Pedido</h3>
              <p>
                <strong>Data:</strong>{" "}
              </p> 
              <p>
                <strong>Estado:</strong> Aberto
              </p>
              <p>
                <strong>Pagamento:</strong> {pagamento}
              </p>
              <p>
                <strong>Meio de pagamento:</strong>{" "}
              </p>
              <p>
                <strong>Frete:</strong> Não enviado
              </p>
              <p>
                <strong>Endereço de Envio:</strong>
              </p>
              <p>
                <strong>Rua:</strong> {rua}
              </p>
              <p>
                <strong>Bairro:</strong> {bairro}
              </p>
              <p>
                <strong>Cidade:</strong> {cidade}
              </p>
              <p>
                <strong>CPF:</strong> {cpf}
              </p>
              <p>
                <strong>Número da casa:</strong> {nCasa}
              </p>
            </article>
          </ModalBody>

          {/* <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter> */}
        </ModalContent>
      </Modal>
      </section>


    </>
  );
}
export { ResultadoBusca };
