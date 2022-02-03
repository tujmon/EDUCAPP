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

export const Container = styled.main`
  width: 65%;
  margin: 0 auto 30px;
  background-color: var(--azul_escuro);
  min-height: 800px;

  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  border-radius: 30px;
`

export const AcademicInformation = styled.div`
  width: 33%;
  margin-bottom: 30px;
  p {
    color: var(--branco);
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    line-height: 2rem;
  }
  li {
    list-style-type: none;
    color: var(--branco);
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    line-height: 2rem;
  }
  strong {
    color: var(--azul_principal);
    font-weight: bold;
  }
`
export const PersonalInformationStudent = styled.div`
  width: 66%;
  background-color: var(--branco);
  border-radius: 30px;
  h2 {
    text-align: center;
    color: var(--azul_principal);
    font-size: 3rem;
    font-weight: bold;
    padding: 2rem;
  }
  section {
    margin-bottom: 2rem;
  }
  h3 {
    color: var(--azul_principal);
    font-size: 2rem;
    font-weight: bold;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  p {
    color: var(--cinza_escuro);
  }
`

export const PersonalInformationProfessor = styled.div`
  width: 33%;
  margin-bottom: 30px;
  img {
    margin: 20px 10%;
    width: 80%;
    border-radius: 100%;
  }
  p {
    color: var(--branco);
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    line-height: 2rem;
  }
  strong {
    color: var(--azul_principal);
    font-weight: bold;
  }
`

export const ProfessionalInformation = styled.div`
  width: 66%;
  background-color: var(--cinza_claro);
  border-radius: 30px;
  h2 {
    text-align: center;
    color: var(--azul_principal);
    font-size: 3rem;
    font-weight: bold;
    padding: 2rem;
  }
  h3 {
    color: var(--azul_principal);
    font-size: 2rem;
    font-weight: bold;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  section {
    margin-bottom: 2rem;
    ul {
      li {
        list-style-type: none;
        color: var(--cinza_escuro);
        font-size: 1.3rem;
        padding: 0.5rem 2rem;
        line-height: 1.5rem;
      }
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
  a {
    text-align: center;
    background-color: var(--azul_principal);
    color: var(--branco);
    width: 30%;
    text-decoration: none;
    padding: 0.8rem;
    border-radius: 5px;
  }
`
