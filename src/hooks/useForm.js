import { useState } from 'react'

export const useForm = () => {
  const [form, setForm] = useState({
    texto: ''
  })

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    })
  }

  return {
    form,
    onInputChange
  }
}
