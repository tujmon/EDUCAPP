import { useForm } from '../hooks/form'
const ProcurarProfessor = () => {
  // header
  // search bar
  // list of professors
  const initialState = {
    filterMessage: ''
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
    <>
      <div>
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
      </div>
      {/* pegar o json retornado e mapear aqui */}
      <div>
        <div>
          <h1>nome professor</h1>
          <a href=""> Acessar perfil</a>
        </div>
        <h1> Cálculo 3, React, Next</h1>
      </div>
    </>
  )
}
export default ProcurarProfessor
