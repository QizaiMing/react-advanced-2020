import React, { useState } from 'react'

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'peter',
  //   age: 24,
  //   message: 'random message'
  // })

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('hello world')

  const changeMessage = () => {
    // setPerson({ ...person, message: 'hello world' })
    setMessage('hello')
  }

  const changeName = () => setName('juanito')

  const changeAge = () => setAge(20)

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>
        {message} {name}
      </h3>
      <button className='btn' onClick={changeName}>
        change name
      </button>
      <button className='btn' onClick={changeAge}>
        change age
      </button>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
  )
}

export default UseStateObject
