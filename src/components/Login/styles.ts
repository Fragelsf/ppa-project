import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
  }
`;

export const Bloco1 = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://cipcom.com.br/wp-content/uploads/2021/04/ALMOXARIFADO.jpg);
  width: 45%;
  height: 100vh;
`;

export const Bloco2 = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    /* width: 50%; */
    margin: 0 auto;

    > h1 {
        font-family: cursive;
      }
      >  h2{
        
        font-family: cursive;
    
      }
}
`;
