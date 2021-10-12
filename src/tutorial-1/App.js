import ProfileFC from './components/profileFC'
import ProfileClass from './components/profileClass'
import './style.css'

function App() {
  return (
    <>
      <ProfileFC name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </>
  )
}

export default App
