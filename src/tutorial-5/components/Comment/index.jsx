import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

const defaultUserImg =
  'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head.png'

export default function Comment({ name, text }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={defaultUserImg} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={text} />
    </ListItem>
  )
}
