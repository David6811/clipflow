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
  DocumentScanner,
  Menu as MenuIcon,
  GetApp
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
    <AppBar 
      position="fixed" 
      elevation={0} 
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'rgba(84, 67, 66, 0.1)',
        zIndex: 1100,
        backdropFilter: 'blur(10px)',
        bgcolor: 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Box
            sx={{
              w: 40,
              h: 40,
              bgcolor: 'secondary.main',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}
          >
            <DocumentScanner sx={{ fontSize: 24, color: 'white' }} />
          </Box>
          <Box>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                color: 'text.primary',
                fontSize: '1.375rem',
                lineHeight: 1
              }}
            >
              ClipFlow
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'text.secondary',
                fontSize: '0.75rem',
                fontWeight: 500
              }}
            >
              Smart Clipboard
            </Typography>
          </Box>
        </Box>
        
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 'auto', ml: 4 }}>
          <Button 
            color="inherit" 
            sx={{ 
              mr: 1,
              color: 'text.secondary',
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'rgba(84, 67, 66, 0.05)'
              }
            }}
          >
            Features
          </Button>
          <Button 
            color="inherit" 
            sx={{ 
              mr: 1,
              color: 'text.secondary',
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'rgba(84, 67, 66, 0.05)'
              }
            }}
          >
            Privacy
          </Button>
          <Button 
            color="inherit" 
            sx={{ 
              mr: 1,
              color: 'text.secondary',
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'rgba(84, 67, 66, 0.05)'
              }
            }}
          >
            About
          </Button>
        </Box>

        {/* CTA Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button 
            variant="contained"
            startIcon={<GetApp />}
            sx={{ 
              bgcolor: 'secondary.main',
              color: 'white',
              fontWeight: 600,
              textTransform: 'none',
              px: 4,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: 'secondary.dark',
                boxShadow: '0 2px 8px rgba(46, 89, 132, 0.3)'
              }
            }}
          >
            Download App
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
            sx={{ color: 'text.primary' }}
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
            sx={{
              '& .MuiPaper-root': {
                bgcolor: 'surface.main',
                border: '1px solid',
                borderColor: 'rgba(84, 67, 66, 0.1)',
                mt: 1
              }
            }}
          >
            <MenuItem onClick={handleClose} sx={{ color: 'text.secondary' }}>
              Features
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ color: 'text.secondary' }}>
              Privacy
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ color: 'text.secondary' }}>
              About
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ color: 'text.secondary' }}>
              Download App
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation