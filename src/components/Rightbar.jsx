import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  Typography,
} from '@mui/material'
import React from 'react'
import Chat from './Chat'

const Rightbar = () => {
  const photosData = [
    {
      src: 'https://rollingstone.uol.com.br/media/_versions/legacy/2014/img-1022131-os-simpsons_widexl.jpg',
    },
    {
      src: 'https://i.ytimg.com/vi/EpOjOklUvsw/maxresdefault.jpg',
    },
    { src: 'https://pbs.twimg.com/media/CE9BcwRUUAAitaZ.jpg' },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyt-wd0FBCjrYStULDvWurIiQ5TfNslp8EdSxXeTj7C9bqWxLdt0N7EvxU0hC-BMNcS8&usqp=CAU',
    },
    {
      src: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/10/simpsons.jpg',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DTxoOhSNmYxSlppM_vn-Yo42uNX6AiOBcXJShRAWk5jN8E3ZYinmYRDGdk9RiqChn7o&usqp=CAU',
    },
  ]

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
    >
      <Box position="fixed" width={320}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Bart"
            sx={{ backgroundColor: 'white' }}
            src="https://pngimg.com/uploads/simpsons/small/simpsons_PNG96.png"
          />
          <Avatar
            alt="Merge"
            sx={{ backgroundColor: 'white' }}
            src="https://pngimg.com/uploads/simpsons/small/simpsons_PNG91.png"
          />
          <Avatar
            alt="Meggie"
            sx={{ backgroundColor: 'white' }}
            src="https://pngimg.com/uploads/simpsons/small/simpsons_PNG90.png"
          />
          <Avatar
            alt="Cow Boy"
            sx={{ backgroundColor: 'white' }}
            src="https://pngimg.com/uploads/simpsons/small/simpsons_PNG41.png"
          />
          <Avatar
            alt="No profile picture"
            sx={{ backgroundColor: 'white' }}
            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          />
          <Avatar
            alt="Nelson"
            sx={{ backgroundColor: 'white' }}
            src="https://pngimg.com/uploads/simpsons/small/simpsons_PNG59.png"
          />
          <Avatar alt="Additional person 1" sx={{ backgroundColor: 'white' }} />
          <Avatar alt="Additional person 2" sx={{ backgroundColor: 'white' }} />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={2} rowHeight={100} gap={5}>
          {photosData.map((photo) => (
            <ImageListItem key={photo} p={5}>
              <img src={photo.src} alt="" />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversation
        </Typography>

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <Chat
            avatarImg="https://pngimg.com/uploads/simpsons/small/simpsons_PNG96.png"
            avatarName="Bart Simpsons"
            subtitle="My son"
            message="Hey Daddy, would you mind I stole your car? Pleeease"
          />
          <Divider variant="inset" component="li" />
          <Chat
            avatarImg="https://pngimg.com/uploads/simpsons/small/simpsons_PNG90.png"
            avatarName="Meggie Sympsons"
            subtitle="My little girl"
            message="Daddy! I didn't take your car, it was mine!"
          />
          <Divider variant="inset" component="li" />
          <Chat
            avatarImg="https://i.pinimg.com/originals/80/68/99/8068991fdd43711ba6470c945f985d88.jpg"
            avatarName="Moses Morris"
            subtitle="Moe, who give me the drinks!"
            message="Come to take your bears Homer!"
          />
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
