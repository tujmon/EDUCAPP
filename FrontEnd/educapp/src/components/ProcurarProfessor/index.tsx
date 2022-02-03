import * as S from './styles'
import { useFormFilter } from '../hooks/form'
import Link from 'next/link'
const ProcurarProfessor = () => {
  // header
  // search bar
  // list of professors
  type Isearch = {
    search: string
  }
  const initialState: Isearch = {
    search: ''
  }
  const { onChange, onSubmit, values } = useFormFilter(
    loginUserCallback,
    initialState
  )

  async function loginUserCallback() {
    console.log(values)
  }
  return (
    <>
      <S.Header>
        <S.Logo>
          Educ<strong>App</strong>
        </S.Logo>
        <S.Menu>
          <ul>
            <S.MenuItem active={false}>
              <Link href="/dashboard" passHref>
                <a>Dashboard</a>
              </Link>
            </S.MenuItem>
            <S.MenuItem active={false}>
              <Link href="/perfil" passHref>
                <a>Perfil</a>
              </Link>
            </S.MenuItem>
            <S.MenuItem active={false}>
              <Link href="/informacoes_contato" passHref>
                <a>Chat</a>
              </Link>
            </S.MenuItem>
            <S.MenuItem active={true}>
              <Link href="/procurar_professor" passHref>
                <a>Procurar Professores</a>
              </Link>
            </S.MenuItem>
          </ul>
        </S.Menu>
      </S.Header>
      <S.Caixa>
        <h1>Procurar Professor</h1>
        <form onSubmit={onSubmit}>
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Cursos"
            onChange={onChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </S.Caixa>
      {/* pegar o json retornado e mapear aqui */}
      <S.Espaco_professor>
        <S.Perfil_professor>
          <h1>nome professor</h1>
          <a href=""> Acessar perfil</a>
        </S.Perfil_professor>
        <h1>Cálculo 3, React, Next</h1>
      </S.Espaco_professor>
    </>
  )
}
export default ProcurarProfessor
