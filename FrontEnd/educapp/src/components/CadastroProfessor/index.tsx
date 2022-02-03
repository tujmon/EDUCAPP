import * as S from './styles'

const CadastroProfessor = () => (
  <S.Caixa>
    <S.Cadastro>
      <h1>Bem vindo, professor!</h1>
      <input type="text" placeholder="Do que você oferece aulas?" />
      <input type="number" placeholder="Qual sua idade?" />
      <input type="text" placeholder="Onde você mora?" />
      <textarea placeholder="Faça uma descrição sua:"></textarea>
      <textarea placeholder="Informe suas formações:"></textarea>
      <textarea placeholder="Quais aulas você oferece?"></textarea>
      <textarea placeholder="Quais seus horários disponíveis para atendimentos?"></textarea>
      <S.SubmitLink>Enviar</S.SubmitLink>
    </S.Cadastro>
  </S.Caixa>
)
export default CadastroProfessor
