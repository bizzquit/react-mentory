import React from 'react'
import EmptyBlock from './components/EmptyBlock'
import Phrase from './components/Phrase'
import { adjectivesArr, nounsArr } from './components/dictionaries'

import './App.css'

function App() {
  const [phrases, setPhrases] = React.useState([])
  const [count, setCount] = React.useState(phrases.length)

  const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length - 1) + 1
  }

  const generationPhrase = () => {
    const newPhrase = [
      adjectivesArr[randomIndex(adjectivesArr)],
      adjectivesArr[randomIndex(adjectivesArr)],
      nounsArr[randomIndex(nounsArr)],
    ].join(' ')

    setCount(count + 1)
    setPhrases([{ phrase: newPhrase, id: count }, ...phrases])
  }

  const clearListPhrase = () => {
    setPhrases([])
    setCount(0)
  }

  return (
    <div className="wrapper">
      {phrases.length === 0 ? <EmptyBlock /> : <Phrase phrases={phrases} />}
      <button className="btn btn_generate" onClick={generationPhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={clearListPhrase}>
        Очистить
      </button>
    </div>
  )
}

export default App
