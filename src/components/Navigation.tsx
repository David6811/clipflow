import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box
} from '@mui/material'
import {
  ContentCopy,
  Menu as MenuIcon
} from '@mui/icons-material'

const Navigation: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" elevation={0} color="surface">
      <Toolbar>
        <ContentCopy sx={{ mr: 2, color: 'primary.main' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          ClipFlow
        </Typography>
        
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }}>
          <Button color="inherit" sx={{ mr: 2 }}>Features</Button>
          <Button color="inherit" sx={{ mr: 2 }}>About</Button>
          <Button color="inherit" sx={{ mr: 2 }}>Contact</Button>
        </Box>

        {/* CTA Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained" color="primary">
            Get Demo
          </Button>
        </Box>

        {/* Mobile menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Features</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation