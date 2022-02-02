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

export const Recupera = styled.div`
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
    width: 100%;
    border-radius: 6px;
  }
`

export const SubmitLink = styled.a`
  background-color: var(--azul_principal);
  color: var(--branco);
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.5rem;
  display: block;
  border-radius: 6px;
  margin-bottom: 1rem;
`
