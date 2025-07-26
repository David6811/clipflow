import React from 'react'
import {
  Box,
  Typography,
  Container
} from '@mui/material'
import {
  CloudOff,
  Security,
  Psychology,
  TouchApp
} from '@mui/icons-material'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: CloudOff,
      title: 'Offline Processing',
      description: 'Works completely offline - no internet required. Extract text from any image instantly.',
      color: '#2E5984',
      position: { top: '15%', left: '8%', rotation: '-2deg' }
    },
    {
      icon: Security,
      title: 'Private & Secure',
      description: 'Your data stays on your device. No cloud storage, no tracking, complete privacy.',
      color: '#8f4942',
      position: { top: '20%', right: '12%', rotation: '3deg' }
    },
    {
      icon: Psychology,
      title: 'Smart Recognition',
      description: 'Powered by Google ML Kit for accurate text recognition and language support.',
      color: '#6E5E0F',
      position: { bottom: '35%', left: '15%', rotation: '1deg' }
    },
    {
      icon: TouchApp,
      title: 'Easy to Use',
      description: 'Simple interface. Just point, tap, and copy. Smart clipboard organization.',
      color: '#544342',
      position: { bottom: '30%', right: '10%', rotation: '-1deg' }
    }
  ]

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #f5f1eb 0%, #e8ddd4 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', height: '80vh' }}>
        
        {/* Clipboard Header */}
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 10 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.2rem', md: '3rem' },
              color: '#3a2f2a',
              mb: 2,
              fontFamily: '"Caveat", cursive, "Inter", sans-serif',
              transform: 'rotate(-1deg)'
            }}
          >
            ClipFlow Features
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#6b5b50',
              fontSize: '1.1rem',
              fontStyle: 'italic'
            }}
          >
            Everything you need for smart clipboard management
          </Typography>
        </Box>

        {/* Main Clipboard */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '500px', md: '600px' },
            maxWidth: '800px',
            mx: 'auto',
            background: `
              linear-gradient(145deg, #8b7355 0%, #6b5643 20%, #544342 100%)
            `,
            borderRadius: '8px 8px 16px 16px',
            boxShadow: `
              0 8px 16px rgba(0,0,0,0.3),
              inset 0 1px 0 rgba(255,255,255,0.1),
              inset 0 -1px 0 rgba(0,0,0,0.2)
            `,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '16px',
              background: 'linear-gradient(90deg, #666 0%, #999 50%, #666 100%)',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: -4,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '8px',
              background: '#333',
              borderRadius: '4px'
            }
          }}
        >
          {/* Paper Background */}
          <Box
            sx={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              background: '#faf8f5',
              borderRadius: '4px',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '40px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: '#e8ddd4',
                opacity: 0.5
              }
            }}
          >
            {/* Paper Lines */}
            {[...Array(15)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  left: '20px',
                  right: '20px',
                  top: `${60 + i * 25}px`,
                  height: '1px',
                  background: '#e0d5c7',
                  opacity: 0.3
                }}
              />
            ))}
          </Box>

          {/* Feature Notes */}
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  ...feature.position,
                  width: { xs: '180px', md: '220px' },
                  transform: `rotate(${feature.position.rotation})`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: `rotate(${feature.position.rotation}) scale(1.05)`,
                    zIndex: 10
                  }
                }}
              >
                {/* Sticky Note */}
                <Box
                  sx={{
                    background: `linear-gradient(145deg, ${feature.color}22 0%, ${feature.color}33 100%)`,
                    borderRadius: '2px',
                    p: 2.5,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    border: `1px solid ${feature.color}44`,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-8px',
                      right: '20px',
                      width: '24px',
                      height: '16px',
                      background: 'linear-gradient(145deg, #ddd 0%, #bbb 100%)',
                      borderRadius: '2px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: feature.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 1.5,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    >
                      <IconComponent sx={{ fontSize: 18, color: 'white' }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: '#2a2a2a',
                        fontFamily: '"Kalam", cursive, "Inter", sans-serif'
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.85rem',
                      lineHeight: 1.4,
                      color: '#4a4a4a',
                      fontFamily: '"Kalam", cursive, "Inter", sans-serif'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            )
          })}

          {/* Brand Stamp */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '30px',
              right: '40px',
              transform: 'rotate(15deg)',
              opacity: 0.6
            }}
          >
            <Box
              sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid #8f4942',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8f4942',
                fontWeight: 'bold',
                fontSize: '0.7rem',
                textAlign: 'center',
                background: 'rgba(143, 73, 66, 0.05)'
              }}
            >
              <div>CLIPFLOW</div>
              <div style={{ fontSize: '0.6rem', marginTop: '2px' }}>APPROVED</div>
            </Box>
          </Box>
        </Box>

        {/* Bottom Quote */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic',
              color: '#6b5b50',
              fontSize: '1.1rem',
              fontFamily: '"Caveat", cursive, "Inter", sans-serif',
              transform: 'rotate(-0.5deg)'
            }}
          >
            &ldquo;Smart clipboard management made simple&rdquo;
          </Typography>
        </Box>
      </Container>

      {/* Add Google Fonts */}
      <Box
        component="link"
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Kalam:wght@300;400;700&display=swap"
        rel="stylesheet"
        sx={{ display: 'none' }}
      />
    </Box>
  )
}

export default FeaturesSection