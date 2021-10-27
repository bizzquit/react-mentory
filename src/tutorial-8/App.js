import React from 'react'

function App() {
  const [users, setUsers] = React.useState([])
  const [loadingError, setLoadingError] = React.useState(false)

  // const getUsers = () => {
  //   fetch('https://6178df40aa7f3400174045b4.mockapi.io/users')
  //     .then((res) => res.json())
  //     .then((result) => setUsers(result))
  // }

  async function getUsers() {
    try {
      let response = await fetch(
        'https://6178df40aa7f3400174045b4.mockapi.io/users'
      )
      if (response.status >= 200 && response.status < 300) {
        setLoadingError(false)
      }
      let users = await response.json()
      setUsers(users)
    } catch (err) {
      setLoadingError(true)
    }
  }

  return (
    <div className="App">
      {loadingError ? (
        <h3>Произошла ошибка загрузки юзеров!</h3>
      ) : (
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              {item.firstName} {item.lastName}
            </li>
          ))}
        </ul>
      )}
      <button onClick={getUsers}>Получить список юзеров</button>
    </div>
  )
}

export default App
