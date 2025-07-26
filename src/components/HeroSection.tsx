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
  CloudOff,
  GetApp
} from '@mui/icons-material'

const HeroSection: React.FC = () => {
  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(180deg, #FFF8F7 0%, rgba(250, 245, 241, 0.98) 30%, rgba(247, 242, 237, 0.95) 60%, rgba(245, 241, 235, 0.92) 80%, rgba(240, 235, 227, 0.96) 95%, #f0ebe3 100%)',
        position: 'relative',
        py: { xs: 10, md: 16 },
        textAlign: 'center',
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        overflow: 'hidden'
      }}
    >
      {/* Geometric Abstract Background - Square Shapes */}
      {/* Left Mint Green/Teal Square */}
      <div 
        className="absolute"
        style={{
          left: '-15%',
          bottom: '-15%',
          width: '450px',
          height: '450px',
          background: 'linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 30%, #34D399 60%, #10B981 100%)',
          transform: 'rotate(-20deg)',
          opacity: 0.7,
          zIndex: 0,
          filter: 'blur(1px)',
          animation: 'organicFlow1 30s ease-in-out infinite'
        }}
      ></div>
      
      {/* Top Right Yellow/Gold Square */}
      <div 
        className="absolute"
        style={{
          right: '-15%',
          top: '-15%',
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 25%, #F59E0B 60%, #D97706 100%)',
          transform: 'rotate(25deg)',
          opacity: 0.6,
          zIndex: 0,
          filter: 'blur(1px)',
          animation: 'organicFlow2 35s ease-in-out infinite'
        }}
      ></div>
      
      {/* Bottom Right Purple/Lavender Square */}
      <div 
        className="absolute"
        style={{
          right: '-12%',
          bottom: '-18%',
          width: '430px',
          height: '430px',
          background: 'linear-gradient(135deg, #E9D5FF 0%, #C4B5FD 25%, #8B5CF6 60%, #7C3AED 100%)',
          transform: 'rotate(-12deg)',
          opacity: 0.5,
          zIndex: 0,
          filter: 'blur(1px)',
          animation: 'organicFlow3 25s ease-in-out infinite'
        }}
      ></div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
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
          Smart Clipboard Management for Android
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
            <CloudOff sx={{ color: 'secondary.main', fontSize: 24 }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              Works Offline
            </Typography>
          </Box>
        </Stack>
      </Container>

      {/* CSS Animations for Reference Image Style */}
      <style>
        {`
          @keyframes organicFlow1 {
            0%, 100% { 
              transform: rotate(-20deg) translate(0px, 0px) scale(1);
            }
            33% { 
              transform: rotate(-17deg) translate(-20px, -15px) scale(1.02);
            }
            66% { 
              transform: rotate(-23deg) translate(15px, 20px) scale(0.98);
            }
          }
          
          @keyframes organicFlow2 {
            0%, 100% { 
              transform: rotate(25deg) translate(0px, 0px) scale(1);
            }
            40% { 
              transform: rotate(28deg) translate(-25px, 15px) scale(1.01);
            }
            80% { 
              transform: rotate(22deg) translate(20px, -18px) scale(0.99);
            }
          }
          
          @keyframes organicFlow3 {
            0%, 100% { 
              transform: rotate(-12deg) translate(0px, 0px) scale(1);
            }
            30% { 
              transform: rotate(-9deg) translate(25px, -20px) scale(1.03);
            }
            70% { 
              transform: rotate(-15deg) translate(-18px, 25px) scale(0.97);
            }
          }
        `}
      </style>
      
    </Box>
  )
}

export default HeroSection