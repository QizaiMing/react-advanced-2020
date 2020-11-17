import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator
// condition ? "executes if true" : "executes if false"

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'John Doe'}</h1>
      <button className='btn' onClick={() => setError(!error)}>
        toggle error
      </button>
      {error && <h1>Error...</h1>}
      {error ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error...</h2>
        </div>
      )}
    </React.Fragment>
  )
}

export default ShortCircuit
