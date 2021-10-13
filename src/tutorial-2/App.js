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
    if (!email && !password) {
      return alert('Ни одно поле не заполнено! - Не хорошо!!!')
    }
    if (!password) {
      return alert('Придумай пароль!!!')
    }
    if (!email) {
      return alert('А где e-mail?')
    }

    console.log('1', { email, password })
    e.target.reset()
    email = password = ''
  }

  return (
    <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="email"
        onChange={changedData}
        className="input input-email"
        placeholder="E-Mail"
      />
      <input
        type="password"
        className="input inputE-pass"
        name="pass"
        onChange={changedData}
        placeholder="Пароль"
      />
      <button type="submit" className="btn-form">
        Войти
      </button>
    </form>
  )
}

export default App
