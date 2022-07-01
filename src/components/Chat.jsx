import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'

const Chat = (props) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.avatarImg} />
      </ListItemAvatar>
      <ListItemText
        primary={props.avatarName}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.subtitle}
            </Typography>
            {' — ' + props.message}
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

export default Chat
