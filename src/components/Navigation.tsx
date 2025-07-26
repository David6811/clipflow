import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container
} from '@mui/material'
import {
  DocumentScanner,
  Menu as MenuIcon,
  GetApp
} from '@mui/icons-material'

const Navigation: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    handleClose() // Close mobile menu if open
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 1 : 0} 
      sx={{ 
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(84, 67, 66, 0.3)' : 'rgba(84, 67, 66, 0.2)',
        zIndex: 1100,
        backdropFilter: 'blur(10px)',
        bgcolor: scrolled ? 'rgba(248, 245, 242, 0.98)' : 'rgba(248, 245, 242, 0.95)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 8px rgba(84, 67, 66, 0.15)' : 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 1.5, px: 0 }}>
          {/* Logo */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mr: 3, 
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
              '&:hover': {
                opacity: 0.8
              }
            }}
            onClick={() => scrollToSection('home')}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                bgcolor: 'secondary.main',
                borderRadius: 2.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2.5,
                boxShadow: '0 2px 8px rgba(46, 89, 132, 0.2)'
              }}
            >
              <DocumentScanner sx={{ fontSize: 26, color: 'white' }} />
            </Box>
            <Box>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 700,
                  color: 'text.primary',
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  letterSpacing: '-0.01em'
                }}
              >
                ClipFlow
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.8rem',
                  fontWeight: 500
                }}
              >
                Smart Clipboard
              </Typography>
            </Box>
          </Box>
        
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 'auto', ml: 6 }}>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('features')}
              sx={{ 
                mr: 2,
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '1.05rem',
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'rgba(84, 67, 66, 0.08)',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              Features
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('showcase')}
              sx={{ 
                mr: 2,
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '1.05rem',
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'rgba(84, 67, 66, 0.08)',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              Demo
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('notes')}
              sx={{ 
                mr: 2,
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '1.05rem',
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'rgba(84, 67, 66, 0.08)',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              Notes
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('security')}
              sx={{ 
                mr: 2,
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '1.05rem',
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'rgba(84, 67, 66, 0.08)',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              Security
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('backup')}
              sx={{ 
                mr: 2,
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '1.05rem',
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'rgba(84, 67, 66, 0.08)',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              Backup
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
                px: 5,
                py: 1.2,
                fontSize: '1.05rem',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(46, 89, 132, 0.2)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  boxShadow: '0 4px 16px rgba(46, 89, 132, 0.3)',
                  transform: 'translateY(-1px)'
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
                  bgcolor: 'rgba(248, 245, 242, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: 'rgba(84, 67, 66, 0.2)',
                  mt: 1,
                  borderRadius: 2,
                  boxShadow: '0 4px 16px rgba(84, 67, 66, 0.1)'
                }
              }}
            >
              <MenuItem onClick={() => scrollToSection('features')} sx={{ color: 'text.secondary', py: 1.5 }}>
                Features
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('showcase')} sx={{ color: 'text.secondary', py: 1.5 }}>
                Demo
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('notes')} sx={{ color: 'text.secondary', py: 1.5 }}>
                Notes
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('security')} sx={{ color: 'text.secondary', py: 1.5 }}>
                Security
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('backup')} sx={{ color: 'text.secondary', py: 1.5 }}>
                Backup
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation