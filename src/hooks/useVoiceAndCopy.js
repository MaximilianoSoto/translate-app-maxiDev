import { useState } from 'react'

export const useVoiceAndCopy = (text, order) => {
  const [copiado, setCopiado] = useState(false)
  const [copiado2, setCopiado2] = useState(false)

  const readVoice = () => {
    const message = new SpeechSynthesisUtterance(text)

    const vocesDisponibles = window.speechSynthesis.getVoices()
    const vozDeseada = vocesDisponibles.find(
      voice => voice.name === 'Microsoft Pablo - Spanish (Spain)'
    )
    message.voice = vozDeseada
    window.speechSynthesis.speak(message)
  }

  const copyToBoard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      if (order === 1) {
        setCopiado(true)

        setTimeout(() => {
          setCopiado(false)
        }, 3000)
      } else {
        setCopiado2(true)

        setTimeout(() => {
          setCopiado2(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error al copiar el texto', error)
    }
  }

  return {
    copiado,
    copiado2,
    readVoice,
    copyToBoard
  }
}
