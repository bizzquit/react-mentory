import { Component } from 'react'
import dateFormat from '../helpers/dateFormat'
import firstName from '../helpers/firstName'

class ProfileClass extends Component {
  render() {
    return (
      <>
        <div className="card">
          <p className="title">
            Привет, <b>{firstName(this.props.name)}!</b>
          </p>
          <p className="date-registered">
            Дата регистрации: {dateFormat(this.props.registredAt)}
          </p>
        </div>
      </>
    )
  }
}

export default ProfileClass
