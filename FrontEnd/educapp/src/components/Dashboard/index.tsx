import { AuthContext } from 'contexts/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'
import * as S from './styles'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  const perfilAluno = (
    <S.Container>
      <S.Titulo>Bem Vindo, {user?.name}</S.Titulo>
      <S.Proximas_aulas>
        <h1>Próximas aulas</h1>
        <S.Espaco_aulas>
          <S.Informacoes_aulas>
            <S.Informacoes_professor>
              <h2>Matemática Discreta</h2>
              <p>Luis Felipe</p>
            </S.Informacoes_professor>
            <S.Horario>
              <p>24/01 - 15:30</p>
              <p>Seg</p>
            </S.Horario>
          </S.Informacoes_aulas>
          <S.Botao href="">Acessar aula</S.Botao>
        </S.Espaco_aulas>

        <S.Espaco_aulas>
          <S.Informacoes_aulas>
            <S.Informacoes_professor>
              <h2>Html/css</h2>
              <p>Davi Matias</p>
            </S.Informacoes_professor>
            <S.Horario>
              <p>27/01 - 17:30</p>
              <p>Qui</p>
            </S.Horario>
          </S.Informacoes_aulas>
          <S.Botao href="">Acessar aula</S.Botao>
        </S.Espaco_aulas>

        <S.Espaco_aulas>
          <S.Informacoes_aulas>
            <S.Informacoes_professor>
              <h2>Back-end</h2>
              <p>Alexandre Abreu</p>
            </S.Informacoes_professor>
            <S.Horario>
              <p>22/01 - 10:30</p>
              <p>Sáb</p>
            </S.Horario>
          </S.Informacoes_aulas>
          <S.Botao href="">Acessar aula</S.Botao>
        </S.Espaco_aulas>
      </S.Proximas_aulas>

      <S.Marcar_novas_aulas>
        <h1>Marcar Outra Aula</h1>
        <S.Novas_aulas>
          <S.Informacoes_novas_aulas>
            <h3>Cálculo 2</h3>
            <p>Arthur</p>
          </S.Informacoes_novas_aulas>
          <S.Seta>➔</S.Seta>
        </S.Novas_aulas>

        <S.Novas_aulas>
          <S.Informacoes_novas_aulas>
            <h3>Lógica matématica</h3>
            <p>Matheus</p>
          </S.Informacoes_novas_aulas>
          <S.Seta>➔</S.Seta>
        </S.Novas_aulas>
      </S.Marcar_novas_aulas>
    </S.Container>
  )
  const perfilProfessor = (
    <S.Container>
      <S.Titulo>Bem Vindo, {user?.name}</S.Titulo>
      <S.Proximas_aulas>
        <h1>Próximas aulas</h1>
        <S.Espaco_aulas>
          <S.Informacoes_aulas>
            <S.Informacoes_professor>
              <h2>Matemática Discreta</h2>
              <p>Luis Felipe</p>
            </S.Informacoes_professor>
            <S.Horario>
              <p>24/01 - 15:30</p>
              <p>Seg</p>
            </S.Horario>
          </S.Informacoes_aulas>
          <S.Botao href="">Acessar aula</S.Botao>
        </S.Espaco_aulas>

        <S.Espaco_aulas>
          <S.Informacoes_aulas>
            <S.Informacoes_professor>
              <h2>Html/css</h2>
              <p>Davi Matias</p>
            </S.Informacoes_professor>
            <S.Horario>
              <p>27/01 - 17:30</p>
              <p>Qui</p>
            </S.Horario>
          </S.Informacoes_aulas>
          <S.Botao href="">Acessar aula</S.Botao>
        </S.Espaco_aulas>

        <S.Espaco_aulas>
          <S.Informacoes_aulas>
            <S.Informacoes_professor>
              <h2>Back-end</h2>
              <p>Alexandre Abreu</p>
            </S.Informacoes_professor>
            <S.Horario>
              <p>22/01 - 10:30</p>
              <p>Sáb</p>
            </S.Horario>
          </S.Informacoes_aulas>
          <S.Botao href="">Acessar aula</S.Botao>
        </S.Espaco_aulas>
      </S.Proximas_aulas>

      <S.Marcar_novas_aulas>
        <h1>Pedido de Aulas</h1>
        <S.Novas_aulas>
          <S.Informacoes_novas_aulas>
            <h3>Cálculo 2</h3>
            <p>Arthur</p>
          </S.Informacoes_novas_aulas>
          <S.Seta>➔</S.Seta>
        </S.Novas_aulas>

        <S.Novas_aulas>
          <S.Informacoes_novas_aulas>
            <h3>Lógica matématica</h3>
            <p>Matheus</p>
          </S.Informacoes_novas_aulas>
          <S.Seta>➔</S.Seta>
        </S.Novas_aulas>
      </S.Marcar_novas_aulas>
    </S.Container>
  )
  return (
    <>
      <S.Header>
        <S.Logo>
          Educ<strong>App</strong>
        </S.Logo>
        <S.Menu>
          <ul>
            <S.MenuItem active={true}>
              <Link href="./Dashboard" passHref>
                <a href="">Dashboard</a>
              </Link>
            </S.MenuItem>
            <S.MenuItem active={false}>
              <Link href="/perfil" passHref>
                <a>Perfil</a>
              </Link>
            </S.MenuItem>
            {!user?.isInstructor && (
              <S.MenuItem active={false}>
                <Link href="/procurar_professor" passHref>
                  <a href="">Procurar Professores</a>
                </Link>
              </S.MenuItem>
            )}
            {user?.isInstructor && (
              <S.MenuItem active={false}>
                <Link href="/informacoes_contato" passHref>
                  <a href="">Chat</a>
                </Link>
              </S.MenuItem>
            )}
          </ul>
        </S.Menu>
      </S.Header>
      {user?.isInstructor ? perfilProfessor : perfilAluno}
    </>
  )
}

export default Dashboard
