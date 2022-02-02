import * as S from './styles'
// import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../../../public/img/arthur.jpg'
const PerfilAluno = () => (
  <>
    <S.Header>
      <S.Logo>
        Educ<strong>App</strong>
      </S.Logo>
      <S.Menu>
        <ul>
          <S.MenuItem active={false}>
            <a href="">Dashboard</a>
          </S.MenuItem>
          <S.MenuItem active={true}>
            <a href="">Perfil</a>
          </S.MenuItem>
          <S.MenuItem active={false}>
            <a href="">Chat</a>
          </S.MenuItem>
          <S.MenuItem active={false}>
            <a href="">Procurar Professores</a>
          </S.MenuItem>
        </ul>
      </S.Menu>
    </S.Header>
    <S.Container>
      <S.AcademicInformation>
        <Image src={profilePic} alt="Foto Perfil" />
        <p>Aluno</p>
        <p>
          Avaliação: <strong>4,83 ⭐</strong>
        </p>
        <p>
          <strong>Ultimas Aulas:</strong>
        </p>
        <ul>
          <li>Violão (Professor Davi Matias)</li>
          <li>Python (Professor Luis Felipe Rocha)</li>
        </ul>
      </S.AcademicInformation>
      <S.PersonalInformation>
        <h2>Arthur Cavalcante Monici</h2>
        <section>
          <h3>Interesses</h3>
          <p>
            Javascript avançado <br /> Cálculo 3 <br /> Violino <br /> Rescript
            Introdutório
          </p>
        </section>
      </S.PersonalInformation>
    </S.Container>
  </>
)

export default PerfilAluno
