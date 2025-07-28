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
        background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(252,252,253,0.6) 100%)',
        position: 'relative',
        py: { xs: 12, md: 20 },
        textAlign: 'center',
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        overflow: 'hidden',
        minHeight: { xs: '90vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Hero-specific Background Shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        {/* Hero Square Shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.04) 0%, rgba(139, 92, 246, 0.02) 100%)',
            borderRadius: '8px',
            transform: 'rotate(15deg)',
            filter: 'blur(8px)',
            animation: 'heroFloat1 20s ease-in-out infinite'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '15%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.04) 0%, rgba(236, 72, 153, 0.02) 100%)',
            borderRadius: '8px',
            transform: 'rotate(-20deg)',
            filter: 'blur(6px)',
            animation: 'heroFloat2 25s ease-in-out infinite reverse'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '25%',
            left: '5%',
            width: '100px',
            height: '60px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.04) 0%, rgba(59, 130, 246, 0.02) 100%)',
            borderRadius: '8px',
            transform: 'rotate(8deg)',
            filter: 'blur(10px)',
            animation: 'heroFloat3 18s ease-in-out infinite'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '8%',
            width: '90px',
            height: '90px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, transparent 70%)',
            borderRadius: '8px',
            filter: 'blur(12px)',
            animation: 'heroFloat4 22s ease-in-out infinite reverse'
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* App Badge */}
        <Chip 
          label="Smart OCR for Android" 
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
          sx={{ 
            fontSize: { xs: '2.8rem', md: '4.5rem' },
            fontWeight: 800,
            mb: 3,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}
        >
          Smart Clipboard
          <br />
          Management
        </Typography>
        
        {/* Subtitle */}
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'text.secondary', 
            mb: 6,
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6,
            fontWeight: 400,
            animation: 'fadeInUp 1s ease-out 0.4s both'
          }}
        >
          Powerful OCR technology meets intelligent clipboard organization. 
          Extract text from images, organize your clips, and boost your productivity - all offline.
        </Typography>
        
        {/* CTA Buttons */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3} 
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 8 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<GetApp />}
            sx={{
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'fadeInUp 1s ease-out 0.6s both',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(59, 130, 246, 0.4)',
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
              }
            }}
          >
            Download Now
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            startIcon={<DocumentScanner />}
            sx={{
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '16px',
              borderColor: 'primary.main', 
              color: 'primary.main',
              backdropFilter: 'blur(10px)',
              background: 'rgba(255, 255, 255, 0.1)',
              borderWidth: '2px',
              animation: 'fadeInUp 1s ease-out 0.8s both',
              '&:hover': {
                borderWidth: '2px',
                transform: 'translateY(-2px)',
                background: 'rgba(59, 130, 246, 0.1)'
              }
            }}
          >
            Learn More
          </Button>
        </Stack>
        
        {/* Feature Highlights */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          sx={{ animation: 'fadeInUp 1s ease-out 1s both' }}
        >
          {[
            { icon: CloudOff, text: '100% Offline' },
            { icon: Security, text: 'Privacy First' },
            { icon: DocumentScanner, text: 'Smart OCR' }
          ].map((feature, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1.5,
                px: 3,
                py: 1.5,
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <feature.icon sx={{ color: 'primary.main', fontSize: 24 }} />
              <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* CSS Animations */}
      <style>
        {`
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

          @keyframes heroFloat1 {
            0%, 100% {
              transform: translateY(0px) rotate(15deg) scale(1);
            }
            50% {
              transform: translateY(-12px) rotate(18deg) scale(1.05);
            }
          }

          @keyframes heroFloat2 {
            0%, 100% {
              transform: translateY(0px) rotate(-20deg) scale(1);
            }
            50% {
              transform: translateY(-8px) rotate(-15deg) scale(1.02);
            }
          }

          @keyframes heroFloat3 {
            0%, 100% {
              transform: translateY(0px) rotate(8deg) scale(1);
            }
            50% {
              transform: translateY(-10px) rotate(5deg) scale(1.03);
            }
          }

          @keyframes heroFloat4 {
            0%, 100% {
              transform: translateY(0px) scale(1);
            }
            50% {
              transform: translateY(-6px) scale(1.01);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default HeroSection