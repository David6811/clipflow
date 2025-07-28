import React from 'react'
import {
  Box,
  Typography,
  Button,
  Container
} from '@mui/material'
import {
  ContentCopy,
  Search,
  PhoneAndroid
} from '@mui/icons-material'

const MobileShowcase: React.FC = () => {
  return (
    <Box sx={{ py: 10, background: 'linear-gradient(135deg, rgba(248,250,252,0.7) 0%, rgba(252,252,253,0.5) 100%)', color: 'text.primary' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, color: 'text.primary' }}>
            Experience ClipFlow
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '600px', mx: 'auto', fontWeight: 400, opacity: 0.8 }}>
            Discover the powerful features that make ClipFlow the ultimate clipboard management solution
          </Typography>
        </Box>

        {/* Mobile Phone Mockups */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: { xs: 2, md: 4 },
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          {/* Phone 1 - Smart Organization */}
          <Box sx={{ 
            width: { xs: 280, md: 320 }, 
            height: { xs: 580, md: 640 },
            bgcolor: '#0F1419',
            borderRadius: 8,
            border: '3px solid #333',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            {/* Phone status bar */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 4,
              fontSize: '14px',
              opacity: 0.7
            }}>
              <span>9:41</span>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 18, height: 10, bgcolor: '#333', borderRadius: 1 }} />
                <Box sx={{ width: 18, height: 10, bgcolor: '#333', borderRadius: 1 }} />
                <Box sx={{ width: 24, height: 12, bgcolor: '#4CAF50', borderRadius: 2 }} />
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ 
                width: 120, 
                height: 120, 
                bgcolor: 'primary.main', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
                background: 'linear-gradient(135deg, #475569 0%, #3b4653 100%)'
              }}>
                <ContentCopy sx={{ fontSize: 48, color: 'white' }} />
              </Box>
              
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Smart Organization
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 4, px: 2 }}>
                Automatically categorize and organize your clipboard items with intelligent tagging and smart folders.
              </Typography>
              
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#4A90E2', 
                  color: 'white',
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  mt: 'auto',
                  mb: 2
                }}
              >
                Get started!
              </Button>
            </Box>
          </Box>

          {/* Phone 2 - OCR Technology */}
          <Box sx={{ 
            width: { xs: 280, md: 320 }, 
            height: { xs: 580, md: 640 },
            bgcolor: '#0F1419',
            borderRadius: 8,
            border: '3px solid #333',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transform: { md: 'scale(1.1)' },
            zIndex: 2
          }}>
            {/* Phone status bar */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 4,
              fontSize: '14px',
              opacity: 0.7
            }}>
              <span>9:41</span>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 18, height: 10, bgcolor: '#333', borderRadius: 1 }} />
                <Box sx={{ width: 18, height: 10, bgcolor: '#333', borderRadius: 1 }} />
                <Box sx={{ width: 24, height: 12, bgcolor: '#4CAF50', borderRadius: 2 }} />
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ 
                width: 120, 
                height: 120, 
                bgcolor: 'secondary.main', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
                background: 'linear-gradient(135deg, #475569 0%, #3b4653 100%)'
              }}>
                <Search sx={{ fontSize: 48, color: 'white' }} />
              </Box>
              
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                OCR Technology
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 4, px: 2 }}>
                Extract text from images instantly with advanced OCR technology. Copy text from photos, screenshots, and documents.
              </Typography>
              
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#4A90E2', 
                  color: 'white',
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  mt: 'auto',
                  mb: 2
                }}
              >
                Get started!
              </Button>
            </Box>
          </Box>

          {/* Phone 3 - Offline Ready */}
          <Box sx={{ 
            width: { xs: 280, md: 320 }, 
            height: { xs: 580, md: 640 },
            bgcolor: '#0F1419',
            borderRadius: 8,
            border: '3px solid #333',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            {/* Phone status bar */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 4,
              fontSize: '14px',
              opacity: 0.7
            }}>
              <span>9:41</span>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 18, height: 10, bgcolor: '#333', borderRadius: 1 }} />
                <Box sx={{ width: 18, height: 10, bgcolor: '#333', borderRadius: 1 }} />
                <Box sx={{ width: 24, height: 12, bgcolor: '#4CAF50', borderRadius: 2 }} />
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ 
                width: 120, 
                height: 120, 
                bgcolor: 'tertiary.main', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
                background: 'linear-gradient(135deg, #475569 0%, #3b4653 100%)'
              }}>
                <PhoneAndroid sx={{ fontSize: 48, color: 'white' }} />
              </Box>
              
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Privacy First
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 4, px: 2 }}>
                Complete offline functionality ensures your clipboard data stays private and secure on your device.
              </Typography>
              
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#4A90E2', 
                  color: 'white',
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  mt: 'auto',
                  mb: 2
                }}
              >
                Get started!
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default MobileShowcase