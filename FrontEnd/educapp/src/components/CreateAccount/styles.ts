import styled from 'styled-components'

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  margin-top: 250px;

  align-items: center;
  text-align: center;
`
export const TextoPrincipal = styled.section`
  color: var(--branco);
  padding: 2rem;
  h1 {
    font-size: 3rem;
    padding: 3rem;
    font-weight: 300;
    strong {
      font-weight: 300;
      color: var(--azul_principal);
    }
  }
  p {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`
export const Cadastro = styled.form`
  color: var(--branco);
  border: 2px var(--azul_principal) dashed;
  border-radius: 5px;
  padding: 2rem 3rem;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  input {
    padding: 0.5rem;
    display: block;
    margin: 0.7rem 0;
    width: 250px;
    border-radius: 6px;
  }
  fieldset {
    font-weight: bold;
    text-align: left;
    margin: 1rem 0;
    border: none;
    legend {
      margin: 0.8rem 0;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      label {
        align: left;
      }
      input {
        width: 10px;
        margin: 0.4rem;
      }
    }
  }
  p {
    text-align: left;
    font-size: 0.8rem;
    font-weight: bold;
  }
`
export const NavLink = styled.a`
  color: var(--azul_principal);
  text-decoration: none;
  cursor: pointer;
`
export const SubmitLink = styled.button`
  background-color: var(--azul_principal);
  color: var(--branco);
  width: 100%;
  border: 0;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.5rem;
  display: block;
  border-radius: 6px;
  margin-bottom: 1rem;
`
