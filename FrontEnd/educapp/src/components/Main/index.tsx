import * as S from './styles'
import Link from 'next/link'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from 'contexts/AuthContext'
const Main = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }
  return (
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <S.SubmitLink type="submit">Entrar</S.SubmitLink>
        </form>
        <p>
          Sem Cadastro?
          <Link href="/criar_conta" passHref>
            <S.NavLink> Criar Conta</S.NavLink>
          </Link>
          <br />
          <Link href="/recuperacao" passHref>
            <S.NavLink>Recuperar Senha</S.NavLink>
          </Link>
        </p>
      </S.Login>
    </S.Caixa>
  )
}

export default Main
