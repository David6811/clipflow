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
        background: 'linear-gradient(180deg, #FFF8F7 0%, rgba(250, 245, 241, 0.98) 40%, rgba(247, 242, 237, 0.95) 70%, rgba(245, 241, 235, 0.92) 85%, #f4f0e8 100%)',
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
      
      {/* Fusion Wave Transition */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        {/* Wave Layer 1 - Base */}
        <Box
          component="svg"
          viewBox="0 0 1200 200"
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '200px',
            fill: '#f0ebe3',
            animation: 'waveFloat1 8s ease-in-out infinite',
            '@keyframes waveFloat1': {
              '0%, 100%': { transform: 'translateX(0px)' },
              '50%': { transform: 'translateX(10px)' }
            }
          }}
        >
          <path d="M0,120 C150,140 300,60 600,100 C900,160 1050,80 1200,120 L1200,200 L0,200 Z" />
        </Box>
        
        {/* Wave Layer 2 - Mid */}
        <Box
          component="svg"
          viewBox="0 0 1200 180"
          sx={{
            position: 'absolute',
            bottom: '20px',
            width: '100%',
            height: '180px',
            fill: 'rgba(240, 235, 227, 0.8)',
            animation: 'waveFloat2 10s ease-in-out infinite',
            '@keyframes waveFloat2': {
              '0%, 100%': { transform: 'translateX(0px)' },
              '50%': { transform: 'translateX(-15px)' }
            }
          }}
        >
          <path d="M0,110 C200,80 450,160 750,120 C1000,60 1150,140 1200,100 L1200,180 L0,180 Z" />
        </Box>
        
        {/* Wave Layer 3 - Top */}
        <Box
          component="svg"
          viewBox="0 0 1200 160"
          sx={{
            position: 'absolute',
            bottom: '40px',
            width: '100%',
            height: '160px',
            fill: 'rgba(243, 238, 230, 0.6)',
            animation: 'waveFloat3 12s ease-in-out infinite',
            '@keyframes waveFloat3': {
              '0%, 100%': { transform: 'translateX(0px)' },
              '50%': { transform: 'translateX(8px)' }
            }
          }}
        >
          <path d="M0,80 C300,50 500,130 800,90 C950,40 1100,120 1200,80 L1200,160 L0,160 Z" />
        </Box>
        
        {/* Wave Layer 4 - Blend */}
        <Box
          component="svg"
          viewBox="0 0 1200 140"
          sx={{
            position: 'absolute',
            bottom: '60px',
            width: '100%',
            height: '140px',
            fill: 'rgba(246, 242, 236, 0.4)'
          }}
        >
          <path d="M0,60 C250,30 550,110 900,70 C1050,20 1150,100 1200,60 L1200,140 L0,140 Z" />
        </Box>
        
        {/* Wave Layer 5 - Subtle Top */}
        <Box
          component="svg"
          viewBox="0 0 1200 120"
          sx={{
            position: 'absolute',
            bottom: '80px',
            width: '100%',
            height: '120px',
            fill: 'rgba(250, 245, 241, 0.2)'
          }}
        >
          <path d="M0,40 C200,10 500,90 750,50 C950,0 1100,80 1200,40 L1200,120 L0,120 Z" />
        </Box>
      </Box>
    </Box>
  )
}

export default HeroSection