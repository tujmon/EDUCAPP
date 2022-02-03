import styled from 'styled-components'
import profilePic from '../../../public/img/davisao_apenas.jpeg'
export const Header = styled.header`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 3rem;
  color: var(--branco);
  strong {
    color: var(--azul_principal);
  }
`
export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`
export const MenuItem = styled.li<{ active: boolean }>`
  list-style-type: none;
  a {
    margin-left: 3rem;
    color: var(--branco);
    text-decoration: none;
    &:hover {
      color: var(--azul_principal);
    }
    ${(props) => props.active && `color: var(--azul_principal);`}
  }
  //visited and link
`

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    color: var(--branco);
  }
  width: 50%;
  margin: 3rem auto;
  input {
    background-color: var(--cinza_claro);
    color: var(--cinza_escuro);
    padding: 1rem;
    border-radius: 10px 0 0 10px;
    border: none;
  }

  button {
    background-color: var(--cinza_escuro);
    color: var(--cinza_claro);
    padding: 1rem;
    border-radius: 0 10px 10px 0;
    border: none;
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
  justify-content: space-between;
  h1 {
    width: 60%;
  }
  min-height: 170px;
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
  width: 50%;
`
