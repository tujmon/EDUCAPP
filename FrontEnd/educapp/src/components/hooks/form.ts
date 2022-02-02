import { useState } from 'react'
type Ivalues = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  perfil: string
}
type Isearch = {
  search: string
}
// useForm functional componen
export const useForm = (callback: any, initialState: Ivalues) => {
  const [values, setValues] = useState<Ivalues>(initialState)

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback() // triggering the callback
  }

  // return values
  return {
    onChange,
    onSubmit,
    values
  }
}

export const useFormFilter = (callback: any, initialState: Isearch) => {
  const [values, setValues] = useState<Isearch>(initialState)

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback() // triggering the callback
  }

  // return values
  return {
    onChange,
    onSubmit,
    values
  }
}
