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
      component="section"
      sx={{ 
        background: `
          linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%),
          radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 70%),
          radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 70%)
        `,
        position: 'relative',
        py: { xs: 12, md: 20 },
        textAlign: 'center',
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        overflow: 'hidden',
        minHeight: { xs: '90vh', md: '100vh' },
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Modern Geometric Background Elements */}
      {/* Left Teal Gradient Square */}
      <div 
        className="absolute"
        style={{
          left: '-15%',
          bottom: '-15%',
          width: '450px',
          height: '450px',
          background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 50%, #0F766E 100%)',
          transform: 'rotate(-20deg)',
          opacity: 0.15,
          zIndex: 0,
          filter: 'blur(2px)',
          animation: 'modernFloat1 25s ease-in-out infinite',
          borderRadius: '24px'
        }}
      ></div>
      
      {/* Top Right Blue Gradient Square */}
      <div 
        className="absolute"
        style={{
          right: '-15%',
          top: '-15%',
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 50%, #1E40AF 100%)',
          transform: 'rotate(25deg)',
          opacity: 0.2,
          zIndex: 0,
          filter: 'blur(2px)',
          animation: 'modernFloat2 30s ease-in-out infinite',
          borderRadius: '24px'
        }}
      ></div>
      
      {/* Bottom Right Purple Gradient Square */}
      <div 
        className="absolute"
        style={{
          right: '-12%',
          bottom: '-18%',
          width: '430px',
          height: '430px',
          background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
          transform: 'rotate(-12deg)',
          opacity: 0.18,
          zIndex: 0,
          filter: 'blur(2px)',
          animation: 'modernFloat3 20s ease-in-out infinite',
          borderRadius: '24px'
        }}
      ></div>
      
      {/* Additional floating elements for depth */}
      <div 
        className="absolute"
        style={{
          left: '60%',
          top: '20%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
          borderRadius: '50%',
          opacity: 0.1,
          zIndex: 0,
          filter: 'blur(1px)',
          animation: 'modernFloat4 15s ease-in-out infinite'
        }}
      ></div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* App Badge */}
        <Chip 
          label="🚀 Smart OCR for Android" 
          sx={{ 
            mb: 6,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            color: 'secondary.main',
            fontWeight: 600,
            fontSize: '0.95rem',
            px: 3,
            py: 1.5,
            borderRadius: '50px',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)',
            animation: 'fadeInUp 0.8s ease-out'
          }} 
        />
        
        {/* Main Heading */}
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 800,
            fontSize: { xs: '3.5rem', md: '5.5rem' },
            background: 'linear-gradient(135deg, #1E293B 0%, #475569 50%, #64748B 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.03em',
            mb: 4,
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}
        >
          ClipFlow
        </Typography>
        
        {/* Subtitle */}
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 5, 
            maxWidth: '900px', 
            mx: 'auto', 
            fontWeight: 500,
            color: 'text.primary',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            lineHeight: 1.2,
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}
        >
          Smart Clipboard Management for Android
        </Typography>

        {/* Description */}
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 8, 
            maxWidth: '750px', 
            mx: 'auto', 
            fontWeight: 400,
            color: 'text.secondary',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.7,
            animation: 'fadeInUp 0.8s ease-out 0.6s both'
          }}
        >
          Copy text from any image, screenshot, or document instantly. 
          Smart, secure, and works completely offline on your Android device.
        </Typography>
        
        {/* CTA Buttons */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={4} 
          justifyContent="center" 
          sx={{ 
            mb: 10,
            animation: 'fadeInUp 0.8s ease-out 0.8s both'
          }}
        >
          <Button 
            variant="contained" 
            size="large"
            startIcon={<GetApp />}
            sx={{ 
              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.15rem',
              fontWeight: 700,
              borderRadius: '16px',
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': { 
                background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
                boxShadow: '0 12px 35px rgba(59, 130, 246, 0.4)',
                transform: 'translateY(-2px) scale(1.02)'
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
              px: 6,
              py: 2,
              fontSize: '1.15rem',
              fontWeight: 600,
              borderRadius: '16px',
              textTransform: 'none',
              borderWidth: '2px',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': { 
                bgcolor: 'rgba(30, 41, 59, 0.04)',
                borderWidth: '2px',
                transform: 'translateY(-2px) scale(1.02)',
                boxShadow: '0 8px 25px rgba(30, 41, 59, 0.15)'
              }
            }}
          >
            Learn More
          </Button>
        </Stack>

        {/* App Highlights */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={6} 
          justifyContent="center"
          alignItems="center"
          sx={{ 
            mt: 4,
            animation: 'fadeInUp 0.8s ease-out 1s both'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            px: 3,
            py: 2,
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
            }
          }}>
            <DocumentScanner sx={{ color: 'secondary.main', fontSize: 28 }} />
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '1.05rem' }}>
              Smart OCR
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            px: 3,
            py: 2,
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
            }
          }}>
            <Security sx={{ color: 'tertiary.main', fontSize: 28 }} />
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '1.05rem' }}>
              Private & Secure
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            px: 3,
            py: 2,
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
            }
          }}>
            <CloudOff sx={{ color: 'success.main', fontSize: 28 }} />
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '1.05rem' }}>
              Works Offline
            </Typography>
          </Box>
        </Stack>
      </Container>

      {/* Modern CSS Animations */}
      <style>
        {`
          @keyframes modernFloat1 {
            0%, 100% { 
              transform: rotate(-20deg) translate(0px, 0px) scale(1);
              opacity: 0.15;
            }
            33% { 
              transform: rotate(-18deg) translate(-15px, -10px) scale(1.01);
              opacity: 0.12;
            }
            66% { 
              transform: rotate(-22deg) translate(10px, 15px) scale(0.99);
              opacity: 0.18;
            }
          }
          
          @keyframes modernFloat2 {
            0%, 100% { 
              transform: rotate(25deg) translate(0px, 0px) scale(1);
              opacity: 0.2;
            }
            40% { 
              transform: rotate(27deg) translate(-20px, 12px) scale(1.02);
              opacity: 0.15;
            }
            80% { 
              transform: rotate(23deg) translate(18px, -14px) scale(0.98);
              opacity: 0.25;
            }
          }
          
          @keyframes modernFloat3 {
            0%, 100% { 
              transform: rotate(-12deg) translate(0px, 0px) scale(1);
              opacity: 0.18;
            }
            30% { 
              transform: rotate(-10deg) translate(20px, -15px) scale(1.01);
              opacity: 0.15;
            }
            70% { 
              transform: rotate(-14deg) translate(-15px, 20px) scale(0.99);
              opacity: 0.22;
            }
          }
          
          @keyframes modernFloat4 {
            0%, 100% { 
              transform: translate(0px, 0px) scale(1);
              opacity: 0.1;
            }
            50% { 
              transform: translate(-10px, -20px) scale(1.1);
              opacity: 0.15;
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      
    </Box>
  )
}

export default HeroSection