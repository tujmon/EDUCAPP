import * as S from './styles'
const CadastroAluno = () => {
  return (
    <S.Caixa>
      <S.Cadastro>
        <h1>Bem vindo, aluno!</h1>
        <textarea placeholder="Do que você tem interesse em aprender?"></textarea>
        <input type="text" placeholder="Quais são seus interesses?" />
        <S.SubmitLink href="">Enviar</S.SubmitLink>
      </S.Cadastro>
    </S.Caixa>
  )
}
export default CadastroAluno
