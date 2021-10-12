import dateFormat from '../helpers/dateFormat'
import firstName from '../helpers/firstName'

function ProfileFC({ name, registredAt }) {
  return (
    <div className="card">
      <p className="title">
        Привет, <b>{firstName(name)}!</b>
      </p>
      <p className="date-registered">
        Дата регистрации: {dateFormat(registredAt)}
      </p>
    </div>
  )
}

export default ProfileFC
