import * as S from './styles'
import Link from 'next/link'
import { useForm } from '../hooks/form'
const Cadastro = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    perfil: ''
  }
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  )

  async function loginUserCallback() {
    console.log(values)
    if (values.password !== values.passwordConfirmation) {
      alert('Senhas não conferem')
      return
    }
    // fazer chamadas diferentes para alunos e professores
    if (values.perfil === 'aluno') {
      // chamada para a api de professor
      console.log('A')
    }
    if (values.perfil === 'professor') {
      // chamada para a api de aluno
      console.log('P')
    }
  }
  return (
    <S.Caixa>
      <S.TextoPrincipal>
        <h1>
          Educ<strong>App</strong>
        </h1>
        <p>Junte-se a nós e tenha acesso a uma infinidade de aulas</p>
      </S.TextoPrincipal>

      <S.Cadastro onSubmit={onSubmit}>
        <h1>Criar Conta</h1>
        {/* <input id="name" name="name" type="text" autoComplete="name" placeholder="nome"</input>required /> */}
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nome"
          onChange={onChange}
          required
        />
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          required
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Senha"
          onChange={onChange}
          required
        />
        <input
          name="passwordConfirmation"
          id="passwordConfirmation"
          type="password"
          placeholder="Confirmar Senha"
          onChange={onChange}
          required
        />

        <fieldset>
          <legend> Qual o tipo de perfil? </legend>
          <div>
            <input
              id="professor"
              type="radio"
              value="professor"
              onChange={onChange}
              name="perfil"
            />
            <label htmlFor="">Professor</label>
            <input
              id="aluno"
              type="radio"
              value="aluno"
              onChange={onChange}
              name="perfil"
            />
            <label htmlFor="">Aluno</label>
          </div>
        </fieldset>
        <S.SubmitLink>Cadastrar</S.SubmitLink>
        <p>
          Já possui um cadastro?{' '}
          <Link href="/" passHref>
            <S.NavLink type="submit"> Fazer Login</S.NavLink>
          </Link>
        </p>
      </S.Cadastro>
    </S.Caixa>
  )
}
export default Cadastro
