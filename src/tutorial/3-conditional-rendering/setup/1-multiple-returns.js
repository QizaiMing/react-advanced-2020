import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setIsLoading(false)
          setError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => setError(true))
  }, [])

  if (isLoading) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  } else if (error) {
    return (
      <React.Fragment>
        <h1>Error...</h1>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>{user}</h1>
      </React.Fragment>
    )
  }
}

export default MultipleReturns
