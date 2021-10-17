import React from 'react'

function Phrase({ phrases = [] }) {
  return (
    <div className="list">
      {phrases.map(({ phrase, id }) => (
        <div key={id} className="block">
          <h3>{phrase}</h3>
        </div>
      ))}
    </div>
  )
}

export default Phrase
