import * as S from './styles'
const RedefinindoSenha = () => (
  <S.Caixa>
    <S.Recupera>
      <h1>Defina sua nova senha</h1>
      <input type="password" placeholder="Nova Senha" required />
      <input type="password" placeholder="Confirme sua nova senha" required />
      <S.SubmitLink href="\">Confirmar</S.SubmitLink>
    </S.Recupera>
  </S.Caixa>
)
export default RedefinindoSenha
