import * as S from './styles'
import Link from 'next/link'
const Recuperacao = () => (
  <S.caixa>
    <S.Recupera>
      <h1>Recuperar Senha</h1>
      <input type="email" placeholder="Email" required />
      <S.SubmitLink href="">Enviar Email</S.SubmitLink>
      <p>
        Já possui um cadastro?
        <Link href="/" passHref>
          <S.NavLink> Fazer Login</S.NavLink>
        </Link>
      </p>
      <p>
        Sem cadastro?
        <Link href="/criar_conta" passHref>
          <S.NavLink> Criar Conta</S.NavLink>
        </Link>
      </p>
    </S.Recupera>
  </S.caixa>
)

export default Recuperacao
