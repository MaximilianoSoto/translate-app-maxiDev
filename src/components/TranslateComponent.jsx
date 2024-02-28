/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useForm } from '../hooks/useForm'
import Countries from '../helper/Countries'
import { ReadTextAndVoice } from './ReadTextAndVoice'
import { Horizontal, Sort } from "../assets/SVG's"
import { useGetFetchTranslate } from '../hooks/useGetFetchTranslate'
import { useTranslate } from '../hooks/useTranslate'

export const TranslateComponent = () => {
  const { form, onInputChange } = useForm()
  const { texto } = form

  const {
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
  } = useTranslate(texto)

  const { text, toTranslated, translated } = textState

  const { data, isLoading, errors } = useGetFetchTranslate(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=${toTranslated}|${translated}`
  )

  if (!data) {
    return null
  }

  const { matches } = data

  return (
    <>
      <aside className='text-area-translation'>
        <div className='language-flex'>
          <div>
            <button>Detect Language</button>
            <button className={botonActivo === 1 ? 'active' : ''} onClick={handleClickCountrie}>
              English
            </button>
            <button className={botonActivo === 2 ? 'active' : ''} onClick={handleClickCountrieDos}>
              French
            </button>
            <select
              className={botonActivo === 3 ? 'active' : ''}
              value={selectedLanguage}
              onChange={handlePaisChange}
            >
              {Object.entries(Countries).map(([código, nombre]) => (
                <option className='select-options' key={código} value={código}>
                  {nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr className='hr' />
        <form onSubmit={onSubmit}>
          <textarea
            placeholder='Escriba aquí...'
            name='texto'
            value={texto}
            onChange={onInputChange}
            maxLength={500}
          />
          <div className='text-cont'>{texto.length} / 500</div>
          <div className='controls'>
            <div className='actions-translate-btn'>
              <ReadTextAndVoice texto={texto} order={1} />
            </div>
            <button type='submit' className='translate-btn'>
              <Sort />
              Translate
            </button>
          </div>
        </form>
      </aside>
      {isLoading ? (
        <h4>...Loading</h4>
      ) : errors ? (
        <h2>HUBO UN ERROR ${errors}</h2>
      ) : (
        <aside className='text-show-translation'>
          <div className='language-flex'>
            <div>
              <button className={rightBtn === 1 ? 'active' : ''} onClick={handleClickTranslate}>
                English
              </button>
              <button className={rightBtn === 2 ? 'active' : ''} onClick={handleClickTranslateDos}>
                French
              </button>
              <select
                className={rightBtn === 3 ? 'active' : ''}
                value={toTranslate}
                onChange={handleTranslateChange}
              >
                {Object.entries(Countries).map(([código, nombre]) => (
                  <option className='select-options' key={código} value={código}>
                    {nombre}
                  </option>
                ))}
              </select>
            </div>
            <button className='icon-btn horizontal'>
              <Horizontal />
            </button>
          </div>
          <hr />
          <textarea
            placeholder='Traducción'
            name='texto'
            value={matches[0]?.translation}
            readOnly
            maxLength={500}
          />
          <div className='controls'>
            <div className='actions-translate-btn'>
              <ReadTextAndVoice texto={matches[0]?.translation} order={2} />
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
