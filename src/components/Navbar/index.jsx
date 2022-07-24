import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Autocomplete,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { Celebration, Mail, Notifications } from '@mui/icons-material'
import { createFilterOptions } from '@mui/material/Autocomplete'
const filter = createFilterOptions()

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const simpsonsPhrases = [
    { title: 'Mmm, donuts.' },
    { title: 'Stupid Flanders.' },
    { title: 'BART!' },
    { title: "Whatever, I'll be at Moe's." },
    { title: "Let's All Go Out For Some Frosty Chocolate Milkshakes" },
    { title: "Don't Have a Cow, Man!" },
    { title: "I'm Bart Simpson, Who the Hell are You?" },
  ]

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h5"
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          SimpsonsBook
        </Typography>
        <Celebration
          sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
        />

        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              setValue({
                title: newValue,
              })
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              })
            } else {
              setValue(newValue)
            }
          }}
          filterOptions={(options, params) => filter(options, params)}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="A peek!"
          options={simpsonsPhrases}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{
            width: '45%',
            backgroundColor: 'white',
            borderRadius: '5px',
          }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="A peek!"
              sx={{ borderRadius: '5px' }}
            />
          )}
        />

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn-0.easydrawingtutorials.com/images/HomerSimpson/homer-simpson-step-last.jpg?ezimgfmt=ng:webp/ngcb2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn-0.easydrawingtutorials.com/images/HomerSimpson/homer-simpson-step-last.jpg?ezimgfmt=ng:webp/ngcb2"
          />
          <Typography>Homer</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
