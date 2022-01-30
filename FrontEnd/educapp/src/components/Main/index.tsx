import * as S from './styles'
import Link from 'next/link'
const Main = () => (
  <S.Caixa>
    <S.TextoPrincipal>
      <h1>
        Educ<strong>App</strong>
      </h1>
      <p>
        Conectando <br /> alunos e professores
      </p>
    </S.TextoPrincipal>
    <S.Login>
      <h1>Login</h1>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="senha" required />
      <S.SubmitLink href=""> Entrar </S.SubmitLink>
      <p>
        Sem Cadastro?
        <Link href="/criar_conta" passHref>
          <S.NavLink> Criar Conta</S.NavLink>
        </Link>
        <br />
        <Link href="/recuperacao" passHref>
          <S.NavLink href="">Recuperar Senha</S.NavLink>
        </Link>
      </p>
    </S.Login>
  </S.Caixa>
)

export default Main
