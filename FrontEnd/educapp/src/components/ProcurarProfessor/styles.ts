import styled from 'styled-components'

export const Caixa = styled.div`
  color: red;
  display: flex;
  h1 {
    color: var(--azul_principal);
  }
`

export const Espaco_professor = styled.div`
  background-color: var(--cinza_claro);
  color: var(--cinza_escuro);
  width: 60%;
  margin: 0 auto;
  padding: 1rem 3rem;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  h1 {
    width: ;
  }
`

export const Perfil_professor = styled.div`
  color: var(--azul_principal);
  font-size: 1rem;
  h1 {
    margin-bottom: 3rem;
  }
  a {
    background-color: var(--azul_principal);
    color: var(--branco);
    text-decoration: none;
    padding: 1rem;
    border-radius: 7px;
  }
  width: 40%;
`
