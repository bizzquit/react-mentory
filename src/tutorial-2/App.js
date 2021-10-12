import './style.css'

function App({ email = '', password = '' }) {
  const changedData = (e) => {
    switch (e.target.attributes.name.value) {
      case 'email':
        email = e.target.value.trim()
        break
      case 'pass':
        password = e.target.value.trim()
        break
      default:
        return null
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email && !password)
      return alert('Ни одно поле не заполнено! - Не хорошо!!!')
    else if (!password) return alert('Придумай пароль!!!')
    else if (!email) return alert('А где e-mail?')

    console.log({ email, password })

    e.target.reset()
  }

  return (
    <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="email"
        onChange={(evt) => changedData(evt)}
        className="input input-email"
        placeholder="E-Mail"
      />
      <input
        type="password"
        className="input inputE-pass"
        name="pass"
        onChange={(evt) => changedData(evt)}
        placeholder="Пароль"
      />
      <button type="submit" className="btn-form">
        Войти
      </button>
    </form>
  )
}

export default App
