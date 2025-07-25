import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
  Card,
  CardContent,
  Fab
} from '@mui/material'
import { 
  ContentCopy, 
  Search, 
  PhoneAndroid, 
  Menu as MenuIcon,
  BookOnline,
  GetApp
} from '@mui/icons-material'
import React, { useState } from 'react'

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Material-UI AppBar */}
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

      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #4A6741 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '4rem' } }}>
            ClipFlow
          </Typography>
          
          <Typography variant="h4" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto', fontWeight: 400 }}>
            Smart Clipboard Management for Android
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 6 }}>
            <Button 
              variant="contained" 
              size="large"
              startIcon={<GetApp />}
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.50' }
              }}
            >
              Download App
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<BookOnline />}
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Feature Cards */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mt: 6 }}>
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <CardContent sx={{ textAlign: 'center', color: 'white' }}>
                <ContentCopy sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Clipboard Manager
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Access your entire clipboard history with ease
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <CardContent sx={{ textAlign: 'center', color: 'white' }}>
                <Search sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  OCR Technology
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Extract text from images instantly
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <CardContent sx={{ textAlign: 'center', color: 'white' }}>
                <PhoneAndroid sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Offline Ready
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Works completely offline for privacy and speed
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Why Choose ClipFlow?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', fontWeight: 400 }}>
              Powerful features designed to revolutionize your Android clipboard experience
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
            <Card elevation={1}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ 
                  width: 48, 
                  height: 48, 
                  bgcolor: 'primary.light', 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mb: 2 
                }}>
                  <ContentCopy color="primary" />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Smart Organization
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Automatically categorize and organize your clipboard items with intelligent tagging
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={1}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ 
                  width: 48, 
                  height: 48, 
                  bgcolor: 'secondary.light', 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mb: 2 
                }}>
                  <Search color="secondary" />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Fast Search
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find any copied content instantly with powerful search and filtering capabilities
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={1} sx={{ gridColumn: { md: 'span 2', lg: 'span 1' } }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ 
                  width: 48, 
                  height: 48, 
                  bgcolor: 'tertiary.light', 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mb: 2 
                }}>
                  <PhoneAndroid sx={{ color: 'tertiary.main' }} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Privacy First
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All data stays on your device. No cloud sync, no tracking, complete privacy
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Floating Action Button */}
      <Fab 
        color="primary" 
        aria-label="download" 
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        <GetApp />
      </Fab>
    </Box>
  )
}

export default App