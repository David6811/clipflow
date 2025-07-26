import React from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Chip,
  Stack
} from '@mui/material'
import {
  DocumentScanner,
  Security,
  Android,
  GetApp
} from '@mui/icons-material'

const HeroSection: React.FC = () => {
  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(180deg, #FFF8F7 0%, rgba(246, 228, 226, 0.95) 80%, rgba(246, 228, 226, 0.8) 100%)',
        position: 'relative',
        py: { xs: 10, md: 16 },
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(46, 89, 132, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(143, 73, 66, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* App Badge */}
        <Chip 
          label="Smart OCR for Android" 
          sx={{ 
            mb: 4,
            bgcolor: 'rgba(46, 89, 132, 0.1)',
            color: 'secondary.main',
            fontWeight: 600,
            fontSize: '0.875rem',
            px: 2,
            py: 1
          }} 
        />
        
        {/* Main Heading */}
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '3rem', md: '4.5rem' },
            color: 'text.primary',
            letterSpacing: '-0.02em',
            mb: 3
          }}
        >
          ClipFlow
        </Typography>
        
        {/* Subtitle */}
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4, 
            maxWidth: '800px', 
            mx: 'auto', 
            fontWeight: 400,
            color: 'text.secondary',
            fontSize: { xs: '1.5rem', md: '2.125rem' },
            lineHeight: 1.3
          }}
        >
          Transform Screenshots to Text with Intelligent OCR
        </Typography>

        {/* Description */}
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 6, 
            maxWidth: '700px', 
            mx: 'auto', 
            fontWeight: 400,
            color: 'text.secondary',
            opacity: 0.8,
            lineHeight: 1.6
          }}
        >
          Copy text from any image, screenshot, or document instantly. 
          Smart, secure, and works completely offline on your Android device.
        </Typography>
        
        {/* CTA Buttons */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3} 
          justifyContent="center" 
          sx={{ mb: 8 }}
        >
          <Button 
            variant="contained" 
            size="large"
            startIcon={<GetApp />}
            sx={{ 
              bgcolor: 'secondary.main', 
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: '0 4px 14px rgba(46, 89, 132, 0.3)',
              '&:hover': { 
                bgcolor: 'secondary.dark',
                boxShadow: '0 6px 20px rgba(46, 89, 132, 0.4)'
              }
            }}
          >
            Download for Android
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            sx={{ 
              borderColor: 'primary.main', 
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              borderWidth: 2,
              '&:hover': { 
                bgcolor: 'rgba(84, 67, 66, 0.05)',
                borderWidth: 2
              }
            }}
          >
            Learn More
          </Button>
        </Stack>

        {/* App Highlights */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={4} 
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 6 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DocumentScanner sx={{ color: 'secondary.main', fontSize: 24 }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              Smart OCR
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Security sx={{ color: 'tertiary.main', fontSize: 24 }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              Private & Secure
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Android sx={{ color: 'secondary.main', fontSize: 24 }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              Works Offline
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroSection