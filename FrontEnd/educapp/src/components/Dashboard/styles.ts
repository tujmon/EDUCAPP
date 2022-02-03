import styled from 'styled-components'

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

export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding: 3rem 0;
`

export const Titulo = styled.h1`
  color: var(--azul_principal);
`

export const Proximas_aulas = styled.div`
  margin: 0 auto;
  width: 60%;
  h1 {
    color: var(--azul_principal);
    padding: 5rem 0;
  }
`

export const Espaco_aulas = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-around;
`

export const Informacoes_aulas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--branco);
  width: 75%;
  border-radius: 20px;
  padding: 0.7rem;
`

export const Informacoes_professor = styled.div`
  p {
    color: var(--azul_principal);
    font-weight: bold;
    font-size: 1.5rem;
  }
`

export const Horario = styled.div`
  text-align: center;
  p {
    font-weight: bold;
  }
`

export const Botao = styled.a`
  margin: auto 0;
  background-color: var(--azul_principal);
  border-radius: 20px;
  padding: 1rem;
  color: var(--branco);
  text-decoration: none;
`

export const Marcar_novas_aulas = styled.div`
  margin: 4rem auto;
  background-color: var(--azul_principal);
  width: 60%;
  h1 {
    color: var(--branco);
    margin: 2rem 1rem;
  }
  border-radius: 20px;
  padding: 0.7rem;
`

export const Novas_aulas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--branco);
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 0.7rem;
  margin-bottom: 1rem;
`

export const Informacoes_novas_aulas = styled.div`
  h3 {
    color: (--preto);
  }
  p {
    color: (--azul_principal);
  }
`

export const Seta = styled.p`
  color: var(--azul_principal);
  font-size: 4rem;
`
