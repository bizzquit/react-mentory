import React from 'react'

function App() {
  const [users, setUsers] = React.useState([])

  async function getUsers() {
    try {
      let response = await fetch(
        'https://6178df40aa7f3400174045b4.mockapi.io/users'
      )
      let users = await response.json()
      setUsers(users)
    } catch (e) {
      if (e.name === 'SyntaxError') {
        console.log(`Что-то пошло не так - ${e.name}`)
      } else {
        throw e
      }
    }
  }

  return (
    <div className="App">
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список юзеров</button>
    </div>
  )
}

export default App
