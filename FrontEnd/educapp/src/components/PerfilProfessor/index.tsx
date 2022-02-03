import * as S from './styles'
import Image from 'next/image'
import profilePic from '../../../public/img/davisao_apenas.jpeg'
import Link from 'next/link'
const PerfilProfessor = () => (
  <>
    <S.Header>
      <S.Logo>
        Educ<strong>App</strong>
      </S.Logo>
      <S.Menu>
        <ul>
          <S.MenuItem active={false}>
            <Link href="/dashboard" passHref>
              <a href="">Dashboard</a>
            </Link>
          </S.MenuItem>
          <S.MenuItem active={true}>
            <a href="">Perfil</a>
          </S.MenuItem>
          <S.MenuItem active={false}>
            <Link href="/informacoes_contato" passHref>
              <a href="">Chat</a>
            </Link>
          </S.MenuItem>
          <S.MenuItem active={false}>
            <Link href="/procurar_professor" passHref>
              <a href="">Procurar Professores</a>
            </Link>
          </S.MenuItem>
        </ul>
      </S.Menu>
    </S.Header>
    <S.Container>
      <S.PersonalInformation>
        <Image src={profilePic} alt="Foto Perfil" />
        <p>
          Instrutor de: <strong>Violão e Matemática</strong>
        </p>
        <p>
          Idade: <strong>20 anos</strong>
        </p>
        <p>
          Avaliação: <strong>4,67 ⭐</strong>
        </p>
        <p>
          Mora em: <strong>Taguatinga - DF</strong>
        </p>
        <p>
          Descrição:{' '}
          <strong>
            Gosto de jogar bola e videogame. Por ser novo, consigo me relacionar
            bem com jovens. Entre em contato para que possamos combinar uma aula
          </strong>
        </p>
      </S.PersonalInformation>

      <S.ProfessionalInformation>
        <h2>Davi Matias Araújo</h2>
        <section>
          <h3>Formações</h3>
          <ul>
            <li>Ciência da Computação - Instituto Fedeal de Brasília</li>
            <li>Doutorado em Matemática - Universidade de Brasília</li>
          </ul>
        </section>

        <section>
          <h3>Aulas que oferece</h3>
          <ul>
            <li>Básico e intermediário de violão</li>
            <li>Básico de matemática</li>
            <li>Cálculo 1, 2 e 3</li>
            <li>Matemática discreta</li>
            <li>
              Qualquer outro conteúdo, podemos entrar em contato para vermos a
              possibilidade de uma aula.
            </li>
          </ul>
        </section>
        <section>
          <h3>Horários</h3>
          <ul>
            <li>De Segunda a Sexta, das 8h às 12h - 14h às 19h</li>
            <li>Sábado, das 9h às 11h</li>
          </ul>
        </section>
        <S.ButtonContainer>
          <a href="">Marcar Aula</a>
          <a href="">Enviar Mensagem</a>
        </S.ButtonContainer>
      </S.ProfessionalInformation>
    </S.Container>
  </>
)
export default PerfilProfessor
