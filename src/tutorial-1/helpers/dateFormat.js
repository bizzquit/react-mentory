const locale = 'ru'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const dateFormat = (registredAt) => {
  return registredAt.toLocaleString(locale, options)
}

export default dateFormat
