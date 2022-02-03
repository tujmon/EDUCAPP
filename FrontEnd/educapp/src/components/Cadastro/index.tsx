import { AuthContext } from 'contexts/AuthContext'
import { useContext } from 'react'
import { useFormProfessor, useFormAluno } from '../hooks/form'
import { api } from 'services/api'
import * as S from './styles'
const Cadastro = () => {
  const initialStateProfessor = {
    classes: '',
    description: '',
    address: '',
    age: '',
    formation: '',
    hours: ''
  }
  const initialStateAluno = {
    interesses: ''
  }
  const { user } = useContext(AuthContext)
  console.log(user)
  if (user?.isInstructor) {
    const { onChange, onSubmit, values } = useFormProfessor(
      loginUserCallback,
      initialStateProfessor
    )
  } else {
    const { onChange, onSubmit, values } = useFormAluno(
      loginUserCallback,
      initialStateAluno
    )
  }
  async function loginUserCallback() {
    console.log(values)
    try {
      const response = await api.post('/users', {
        classes: values.classes,
        description: values.description,
        address: values.address,
        age: values.age,
        formation: values.formation,
        hours: values.hours
      })
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const CadastroProfessor = (
    <S.Caixa>
      <S.Cadastro onSubmit={onSubmit}>
        <h1>Bem vindo, professor!</h1>
        <input
          id="classes"
          type="classes"
          name="aulas"
          onChange={onChange}
          placeholder="Do que você oferece aulas?"
        />
        <input
          id="number"
          type="number"
          name="age"
          onChange={onChange}
          placeholder="Qual sua idade?"
        />
        <input
          id="address"
          name="address"
          type="text"
          onChange={onChange}
          placeholder="Onde você mora?"
        />
        <textarea
          name="description"
          placeholder="Faça uma descrição sua:"
          onChange={onChange}
        ></textarea>
        <textarea
          name="formation"
          placeholder="Informe suas formações:"
          onChange={onChange}
        ></textarea>
        <textarea
          name="hours"
          placeholder="Quais seus horários disponíveis para atendimentos?"
          onChange={onChange}
        ></textarea>
        <S.SubmitLink>Enviar</S.SubmitLink>
      </S.Cadastro>
    </S.Caixa>
  )
  const CadastroAluno = (
    <S.Caixa>
      <S.Cadastro onSubmit={onSubmit}>
        <h1>Bem vindo, aluno!</h1>
        <textarea
          name="interesses"
          onChange={onChange}
          placeholder="Do que você tem interesse em aprender?"
        />
        <S.SubmitLink type="submit">Enviar</S.SubmitLink>
      </S.Cadastro>
    </S.Caixa>
  )

  return user?.isInstructor !== undefined
    ? user.isInstructor
      ? CadastroProfessor
      : CadastroAluno
    : null
}

export default Cadastro
