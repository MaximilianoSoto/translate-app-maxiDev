/* eslint-disable no-undef */

import { Copy, Sound } from "../assets/SVG's"
import { useState } from 'react'

export const ReadTextAndVoice = ({ texto, order }) => {
  const [copiado, setCopiado] = useState(false)
  const [copiado2, setCopiado2] = useState(false)

  const readVoice = () => {
    const message = new SpeechSynthesisUtterance(texto)

    const vocesDisponibles = window.speechSynthesis.getVoices()
    const vozDeseada = vocesDisponibles.find(
      voice => voice.name === 'Microsoft Pablo - Spanish (Spain)'
    )
    message.voice = vozDeseada
    window.speechSynthesis.speak(message)
  }

  const copyToBoard = async () => {
    try {
      await navigator.clipboard.writeText(texto)
      if (order === 1) {
        setCopiado(true)

        setTimeout(() => {
          setCopiado(false)
        }, 3000)
      } else {
        setTimeout(() => {
          setCopiado2(false)
        }, 3000)

        setCopiado2(true)
      }
    } catch (error) {
      console.error('Error al copiar el texto', error)
    }
  }

  return (
    <>
      <button type='button' onClick={() => readVoice(texto)} className='icon-btn speak'>
        <Sound />
      </button>
      <button type='button' onClick={() => copyToBoard(texto, order)} className='icon-btn copy'>
        <Copy />
      </button>
      {copiado ? <p>Texto copiado</p> : copiado2 ? <p>Texto copiado</p> : ''}
    </>
  )
}
