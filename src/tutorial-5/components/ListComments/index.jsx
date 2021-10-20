import * as React from 'react'
import List from '@mui/material/List'
import Comment from '../Comment'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { AppContext } from '../../App'

import './style.css'

export default function ListComments({ comments = [] }) {
  const { deletedComment } = React.useContext(AppContext)

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {comments.length > 0 && <h3>Комментарии:</h3>}
      {comments.map((item) => {
        return (
          <div key={item.id} className="cardComment">
            <Comment name={item.fullName} text={item.text} />
            <Button
              className="btn-delete"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => deletedComment(item.id)}
            >
              Delete
            </Button>
          </div>
        )
      })}
    </List>
  )
}
