import React from 'react'
import {
  Box,
  Typography,
  Container
} from '@mui/material'
import {
  Assignment,
  CameraAlt
} from '@mui/icons-material'

const PlayStoreFeatureSection: React.FC = () => {
  return (
    <Box 
      component="section"
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #2c5282 100%)',
        position: 'relative',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        overflow: 'hidden',
        minHeight: { xs: '60vh', md: '500px' },
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Subtle Tech Background Elements */}
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
        {/* Floating geometric shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            transform: 'rotate(25deg)',
            animation: 'techFloat1 15s ease-in-out infinite'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            right: '20%',
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '6px',
            transform: 'rotate(-15deg)',
            animation: 'techFloat2 20s ease-in-out infinite reverse'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            left: '10%',
            width: '50px',
            height: '30px',
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '6px',
            transform: 'rotate(10deg)',
            animation: 'techFloat3 18s ease-in-out infinite'
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Main Content Layout */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 }
          }}
        >
          {/* Left Side - Text Content */}
          <Box 
            sx={{ 
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '50%' }
            }}
          >
            {/* Main Title */}
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '3.5rem', md: '5rem' },
                fontWeight: 800,
                mb: 2,
                letterSpacing: '-0.02em',
                color: 'white',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                animation: 'fadeInLeft 1s ease-out'
              }}
            >
              ClipFlow
            </Typography>
            
            {/* Subtitle */}
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                mb: 4,
                fontWeight: 500,
                fontSize: { xs: '1.5rem', md: '2rem' },
                lineHeight: 1.3,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                animation: 'fadeInLeft 1s ease-out 0.2s both'
              }}
            >
              Clipboard Manager + OCR
            </Typography>
          </Box>

          {/* Right Side - Visual Elements */}
          <Box 
            sx={{ 
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' }
            }}
          >
            {/* Clipboard Icon with Animation */}
            <Box
              sx={{
                position: 'relative',
                animation: 'fadeInRight 1s ease-out 0.4s both'
              }}
            >
              {/* Main Clipboard */}
              <Assignment 
                sx={{ 
                  fontSize: { xs: '8rem', md: '12rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                  animation: 'pulse 3s ease-in-out infinite'
                }} 
              />
              
              {/* OCR Scanner Effect */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '30%',
                  right: '-20%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  animation: 'scanEffect 2s ease-in-out infinite'
                }}
              >
                <CameraAlt 
                  sx={{ 
                    fontSize: { xs: '2rem', md: '3rem' },
                    color: '#FFD700',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))'
                  }} 
                />
                
                {/* Scanning Lines Effect */}
                <Box
                  sx={{
                    width: { xs: '40px', md: '60px' },
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
                    animation: 'scanLine 1.5s ease-in-out infinite'
                  }}
                />
              </Box>

              {/* Text Recognition Boxes */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '20%',
                  left: '15%',
                  width: { xs: '30px', md: '40px' },
                  height: '4px',
                  background: 'rgba(255, 215, 0, 0.6)',
                  borderRadius: '2px',
                  animation: 'textHighlight1 2s ease-in-out infinite'
                }}
              />
              
              <Box
                sx={{
                  position: 'absolute',
                  top: '35%',
                  left: '20%',
                  width: { xs: '40px', md: '50px' },
                  height: '4px',
                  background: 'rgba(255, 215, 0, 0.6)',
                  borderRadius: '2px',
                  animation: 'textHighlight2 2s ease-in-out infinite 0.5s'
                }}
              />
              
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '25%',
                  width: { xs: '35px', md: '45px' },
                  height: '4px',
                  background: 'rgba(255, 215, 0, 0.6)',
                  borderRadius: '2px',
                  animation: 'textHighlight3 2s ease-in-out infinite 1s'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.9;
            }
            50% {
              transform: scale(1.02);
              opacity: 1;
            }
          }

          @keyframes scanEffect {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-5px) scale(1.1);
            }
          }

          @keyframes scanLine {
            0% {
              transform: scaleX(0);
              opacity: 0;
            }
            50% {
              transform: scaleX(1);
              opacity: 1;
            }
            100% {
              transform: scaleX(0);
              opacity: 0;
            }
          }

          @keyframes textHighlight1 {
            0%, 70%, 100% {
              opacity: 0;
              transform: scaleX(0);
            }
            10%, 60% {
              opacity: 0.8;
              transform: scaleX(1);
            }
          }

          @keyframes textHighlight2 {
            0%, 70%, 100% {
              opacity: 0;
              transform: scaleX(0);
            }
            20%, 60% {
              opacity: 0.8;
              transform: scaleX(1);
            }
          }

          @keyframes textHighlight3 {
            0%, 70%, 100% {
              opacity: 0;
              transform: scaleX(0);
            }
            30%, 60% {
              opacity: 0.8;
              transform: scaleX(1);
            }
          }

          @keyframes techFloat1 {
            0%, 100% {
              transform: translateY(0px) rotate(25deg);
            }
            50% {
              transform: translateY(-10px) rotate(30deg);
            }
          }

          @keyframes techFloat2 {
            0%, 100% {
              transform: translateY(0px) rotate(-15deg);
            }
            50% {
              transform: translateY(-8px) rotate(-10deg);
            }
          }

          @keyframes techFloat3 {
            0%, 100% {
              transform: translateY(0px) rotate(10deg);
            }
            50% {
              transform: translateY(-6px) rotate(15deg);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default PlayStoreFeatureSection