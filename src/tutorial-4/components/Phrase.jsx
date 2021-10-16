import React from 'react'

function Phrase({ phrases = [] }) {
  return (
    <div className="list">
      {phrases.map((item) => (
        <div key={item.id} className="block">
          <h3>{item.phrase}</h3>
        </div>
      ))}
    </div>
  )
}

export default Phrase
