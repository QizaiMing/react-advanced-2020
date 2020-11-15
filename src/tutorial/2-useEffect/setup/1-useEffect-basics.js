import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value) {
      document.title = `New Messages(${value})`
    }
  })
  console.log('render component')
  return (
    <React.Fragment>
      <h2>useEffect Basics</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </React.Fragment>
  )
}

export default UseEffectBasics
