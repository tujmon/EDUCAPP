import * as S from './styles'
import Link from 'next/link'
const Cadastro = () => (
  <S.Caixa>
    <S.TextoPrincipal>
      <h1>
        Educ<strong>App</strong>
      </h1>
      <p>Junte-se a nós e tenha acesso a uma infinidade de aulas</p>
    </S.TextoPrincipal>

    <S.Cadastro>
      <h1>Criar Conta</h1>
      <input type="text" placeholder="Nome" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Senha" required />
      <input type="password" placeholder="Confirme sua senha" required />

      <fieldset>
        <legend> Qual o tipo de perfil? </legend>
        <div>
          <input type="radio" value="professor" name="tipo_perfil" />
          <label htmlFor="">Professor</label>
          <input type="radio" value="aluno" name="tipo_perfil" />
          <label htmlFor="">Aluno</label>
        </div>
      </fieldset>
      <S.SubmitLink>Cadastrar</S.SubmitLink>
      <p>
        Já possui um cadastro?{' '}
        <Link href="/" passHref>
          <S.NavLink> Fazer Login</S.NavLink>
        </Link>
      </p>
    </S.Cadastro>
  </S.Caixa>
)

export default Cadastro
