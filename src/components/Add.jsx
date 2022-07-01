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
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

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

const Add = (props) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
          height={270}
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
          <TextField
            sx={{
              width: '100%',
              padding: '4px',
            }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Cowabunga!"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3} ml={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAddAlt color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  )
}

export default Add
