import React from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent
} from '@mui/material'
import {
  ContentCopy,
  Search,
  PhoneAndroid,
  BookOnline,
  GetApp
} from '@mui/icons-material'

const HeroSection: React.FC = () => {
  return (
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
  )
}

export default HeroSection