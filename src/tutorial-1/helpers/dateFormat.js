const locale = 'ru'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const dateFormat = (registredAt) => {
  return registredAt
    ? registredAt.toLocaleString(locale, options)
    : 'Дата не указана'
}

export default dateFormat
