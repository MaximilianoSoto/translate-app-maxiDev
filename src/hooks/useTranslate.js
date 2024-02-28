import { useState } from 'react'

export const useTranslate = ( texto ) => {
  const [textState, setTextState] = useState({
    text: 'hola mundo',
    toTranslated: '',
    translated: ''
  })
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [toTranslate, setToTranslate] = useState('')
  const [botonActivo, setBotonActivo] = useState(null)
  const [rightBtn, setRightBtn] = useState(null)

  const updateTextState = newState => {
    const newTextState = {
      ...textState,
      ...newState
    }
    setTextState(newTextState)
  }

  const onSubmit = event => {
    event.preventDefault()

    updateTextState({
      text: texto,
      toTranslated: selectedLanguage,
      translated: toTranslate
    })
  }

  const handleClickCountrie = () => {
    setSelectedLanguage('en-GB')
    setBotonActivo(1)
  }

  const handleClickCountrieDos = ()=> {
    setSelectedLanguage('fr-FR')
    setBotonActivo(2)
  }

  const handleClickTranslate = () => {
    setToTranslate('en-GB')
    setRightBtn(1)
  }

  const handleClickTranslateDos = () => {
    setToTranslate('fr-FR')
    setRightBtn(2)
  }

  const handlePaisChange = event => {
    setSelectedLanguage(event.target.value)
    setBotonActivo(3)
  }

  const handleTranslateChange = event => {
    setToTranslate(event.target.value)
    setRightBtn(3)
  }

  return {
    textState,
    selectedLanguage,
    toTranslate,
    botonActivo,
    rightBtn,
    onSubmit,
    handleClickCountrie,
    handleClickCountrieDos,
    handlePaisChange,
    handleClickTranslate,
    handleClickTranslateDos,
    handleTranslateChange 
  }
}
