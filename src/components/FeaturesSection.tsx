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
      color: '#475569',
      mobilePosition: { order: 1 },
      desktopPosition: { top: '10%', left: '12%', rotation: '-2deg' }
    },
    {
      icon: Security,
      title: 'Private & Secure',
      description: 'Your data stays on your device. No cloud storage, no tracking, complete privacy.',
      color: '#475569',
      mobilePosition: { order: 2 },
      desktopPosition: { top: '15%', right: '12%', rotation: '3deg' }
    },
    {
      icon: Psychology,
      title: 'Smart Recognition',
      description: 'Powered by Google ML Kit for accurate text recognition and language support.',
      color: '#475569',
      mobilePosition: { order: 3 },
      desktopPosition: { bottom: '25%', left: '18%', rotation: '1deg' }
    },
    {
      icon: TouchApp,
      title: 'Easy to Use',
      description: 'Simple interface. Just point, tap, and copy. Smart clipboard organization.',
      color: '#475569',
      mobilePosition: { order: 4 },
      desktopPosition: { bottom: '20%', right: '12%', rotation: '-1deg' }
    }
  ]

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, rgba(248,250,252,0.4) 0%, rgba(252,252,253,0.2) 100%)
        `,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 0,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          pointerEvents: 'none'
        }
      }}
    >
      
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, position: 'relative', zIndex: 10 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.2rem', md: '3rem' },
              color: '#1e293b',
              mb: 2,
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            ClipFlow Features
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#64748b',
              fontSize: '1.1rem',
              fontWeight: 500
            }}
          >
            Everything you need for smart clipboard management
          </Typography>
        </Box>

        {/* Mobile: Card Layout */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: '1fr' }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Box
                  key={index}
                  sx={{
                    background: `linear-gradient(145deg, ${feature.color}15 0%, ${feature.color}25 100%)`,
                    borderRadius: 3,
                    p: 3,
                    border: `2px solid ${feature.color}40`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    position: 'relative',
                    order: feature.mobilePosition.order,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-8px',
                      right: '20px',
                      width: '20px',
                      height: '12px',
                      background: 'linear-gradient(145deg, #ddd 0%, #bbb 100%)',
                      borderRadius: '2px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: feature.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        boxShadow: '0 3px 6px rgba(0,0,0,0.2)'
                      }}
                    >
                      <IconComponent sx={{ fontSize: 24, color: 'white' }} />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: '#2a2a2a',
                        fontFamily: '"Inter", sans-serif'
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.6,
                      color: '#4a4a4a',
                      fontFamily: '"Inter", sans-serif'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              )
            })}
          </Box>
        </Box>

        {/* Desktop: Clipboard Layout */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '600px',
              maxWidth: '800px',
              mx: 'auto',
              background: `
                linear-gradient(145deg, #475569 0%, #3b4653 20%, #334155 100%)
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
                    ...feature.desktopPosition,
                    width: '240px',
                    transform: `rotate(${feature.desktopPosition.rotation})`,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: `rotate(${feature.desktopPosition.rotation}) scale(1.05)`,
                      zIndex: 10
                    }
                  }}
                >
                  {/* Sticky Note */}
                  <Box
                    sx={{
                      background: `linear-gradient(145deg, ${feature.color}22 0%, ${feature.color}33 100%)`,
                      borderRadius: '2px',
                      p: 3,
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
                          fontFamily: '"Inter", sans-serif'
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.82rem',
                        lineHeight: 1.3,
                        color: '#4a4a4a',
                        fontFamily: '"Inter", sans-serif'
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
                  border: '3px solid #475569',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  fontWeight: 'bold',
                  fontSize: '0.7rem',
                  textAlign: 'center',
                  background: 'rgba(71, 85, 105, 0.05)'
                }}
              >
                <div>CLIPFLOW</div>
                <div style={{ fontSize: '0.6rem', marginTop: '2px' }}>APPROVED</div>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Quote */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              fontSize: '1.1rem',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 500
            }}
          >
            &ldquo;Smart clipboard management made simple&rdquo;
          </Typography>
        </Box>
      </Container>

    </Box>
  )
}

export default FeaturesSection