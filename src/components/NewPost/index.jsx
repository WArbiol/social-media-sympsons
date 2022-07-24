import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAddAlt,
  VideoCameraBack,
} from '@mui/icons-material'
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  InputAdornment,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const TitleBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginButtom: '20px',
})

const TitleField = styled(TextField)({
  width: '100%',
  padding: '4px',
})

const DescriptionField = styled(TextField)({
  width: '100%',
  padding: '4px',
})

const inputProps = {
  step: 300,
}

const Add = (props) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [img_url, setImg_url] = useState('')

  return (
    <div>
      <Tooltip
        onClick={handleOpen}
        title="Add Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', sm: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={320}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <TitleBox>
            <Typography
              noWrap
              variant="h5"
              sx={{
                fontWeight: '1000',
                color: '#E3B104',
                opacity: 0.9,
              }}
            >
              Sympsons&nbsp;
            </Typography>
            <Typography variant="h5" color="#666666">
              post
            </Typography>
          </TitleBox>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://cdn-0.easydrawingtutorials.com/images/HomerSimpson/homer-simpson-step-last.jpg?ezimgfmt=ng:webp/ngcb2"
            />
            <Typography fontWeight={500} variant="span">
              Homer
            </Typography>
          </UserBox>
          <TitleField
            id="standard-basic"
            variant="standard"
            placeholder="Title"
            inputProps={{ style: { fontSize: 22 } }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DescriptionField
            id="standard-multiline-static"
            variant="standard"
            multiline
            rows={3}
            placeholder="Cowabunga!"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image color="secondary" />
                </InputAdornment>
              ),
            }}
            variant="standard"
            placeholder="Image link"
            sx={{
              padding: '4px',
              my: 2,
              width: '100%',
            }}
            onChange={(e) => setImg_url(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            Post
          </Button>
        </Box>
      </StyledModal>
    </div>
  )
}

export default Add
