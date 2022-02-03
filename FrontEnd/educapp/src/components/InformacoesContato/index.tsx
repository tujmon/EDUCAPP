import Link from 'next/link'
import * as S from './styles'

const InformacoesContato = () => {
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
                <a href="">Dashboard</a>
              </Link>
            </S.MenuItem>
            <S.MenuItem active={false}>
              <Link href="/perfil" passHref>
                <a href="">Perfil</a>
              </Link>
            </S.MenuItem>
            <S.MenuItem active={true}>
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
        <p>
          <strong>Whatsapp: </strong>NUMERO DO PROFESSOR
        </p>
        <p>
          <strong>Email: </strong>EMAILDOPROFESSOR@HOTMAIL.COM
        </p>
      </S.Container>
    </>
  )
}
export default InformacoesContato
