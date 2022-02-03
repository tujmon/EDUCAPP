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
  text-align: center;
  color: var(--branco);
  background-color: var(--azul_principal);
  width: 40%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 5rem;
  strong {
    font-weight: bold;
  }
`
