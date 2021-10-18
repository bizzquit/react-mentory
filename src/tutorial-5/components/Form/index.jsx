import React from 'react'
import { Button, TextField, TextareaAutosize } from '@mui/material'
import { AppContext } from '../../App'

import './style.css'

function Form() {
  const { setComment } = React.useContext(AppContext)

  const addedComment = (e) => {
    e.preventDefault()
    const newComment = {
      id: Date.now(),
      fullName: e.target[0].value,
      email: e.target[2].value,
      createdAt: new Date().toLocaleString(),
      text: e.target[4].value,
    }
    setComment(newComment)
    clearInput(e)
  }

  const clearInput = (e) => {
    e.target[0].value = e.target[2].value = e.target[4].value = ''
  }

  return (
    <form onSubmit={addedComment}>
      <h3>Оставить комментарий:</h3>
      <TextField
        sx={{ marginBottom: '15px' }}
        fullWidth
        label="Имя"
        id="fullWidth"
      />
      <TextField
        sx={{ marginBottom: '15px' }}
        fullWidth
        type="email"
        label="Почта"
        id="fullWidth"
      />
      <TextareaAutosize
        minRows={5}
        style={{ marginBottom: '15px', width: '100%' }}
        placeholder="введи текст..."
      />
      <Button type="submit" sx={{ width: '100%' }} variant="contained">
        Отправить
      </Button>
    </form>
  )
}

export default Form
