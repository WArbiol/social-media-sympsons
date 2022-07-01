import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Celebration, Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent: "space-between"
})

const Search = styled("div")( ({theme}) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    color: "red",
}) )

const Icons = styled(Box)( ({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")] : {
        display: "flex"
    }
}) )

const UserBox = styled(Box)( ({theme}) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")] : {
        display: "none"
    }
}) )

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return(
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h5' sx={{display:{xs:"none", sm:"block"}}}>PeopleBook</Typography>
                <Celebration             sx={{display:{xs:"block", sm:"none"}}}/>
                
                <Search><InputBase placeholder="A peek!..." /></Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                      <Mail />
                    </Badge>
                    <Badge badgeContent={3} color="error">
                      <Notifications />
                    </Badge>

                    <Avatar 
                        sx={{ width: 30, height: 30 }} 
                        src='https://cdn-0.easydrawingtutorials.com/images/HomerSimpson/homer-simpson-step-last.jpg?ezimgfmt=ng:webp/ngcb2' 
                        onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}   >
                    <Avatar 
                        sx={{ width: 30, height: 30 }} 
                        src='https://cdn-0.easydrawingtutorials.com/images/HomerSimpson/homer-simpson-step-last.jpg?ezimgfmt=ng:webp/ngcb2'                  
                    />
                    <Typography>Homer</Typography>
                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
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