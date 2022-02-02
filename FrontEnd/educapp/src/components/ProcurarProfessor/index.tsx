import * as S from './styles'
import { useForm, useFormFilter } from '../hooks/form'
const ProcurarProfessor = () => {
  // header
  // search bar
  // list of professors
  type Isearch = {
    search: string
  }
  const initialState: Isearch = {
    search: ''
  }
  const { onChange, onSubmit, values } = useFormFilter(
    loginUserCallback,
    initialState
  )

  async function loginUserCallback() {
    console.log(values)
  }
  return (
    <>
      <S.Caixa>
        <h1>Procurar Professor</h1>
        <form onSubmit={onSubmit}>
          <input
            id="filterMessage"
            name="filterMessage"
            type="text"
            placeholder="Cursos"
            onChange={onChange}
          />
        </form>
      </S.Caixa>
      {/* pegar o json retornado e mapear aqui */}
      <S.Espaco_professor>
        <S.Perfil_professor>
          <h1>nome professor</h1>
          <a href=""> Acessar perfil</a>
        </S.Perfil_professor>
        <h1>
          Cálculo 3, React, Next tenho 20 anos e estudo ciencia da computação no
          instituto federal de brasilia moro em taguatinga sou catolico,
          catequista
        </h1>
      </S.Espaco_professor>
    </>
  )
}
export default ProcurarProfessor
