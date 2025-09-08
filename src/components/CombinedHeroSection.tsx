import React from 'react'
import {
  Box,
  Typography,
  Container,
  Chip,
  Stack
} from '@mui/material'
import {
  Security,
  CloudOff,
  Assignment,
  CameraAlt
} from '@mui/icons-material'
import ClipFlowLogo from './ClipFlowLogo'

const CombinedHeroSection: React.FC = () => {
  return (
    <Box 
      component="section"
      sx={{ 
        background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(252,252,253,0.7) 35%, #667eea 70%, #764ba2 85%, #2c5282 100%)',
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
      {/* Combined Background Shapes */}
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
            top: '15%',
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
            top: '20%',
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
            bottom: '35%',
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

        {/* Tech Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '25%',
            left: '15%',
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            transform: 'rotate(25deg)',
            animation: 'techFloat1 15s ease-in-out infinite'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            right: '20%',
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '6px',
            transform: 'rotate(-15deg)',
            animation: 'techFloat2 20s ease-in-out infinite reverse'
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Top Section - Original Hero Content */}
        <Box sx={{ mb: 8 }}>
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
              { icon: 'ClipFlowLogo', text: 'Smart Clipboard' }
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
                {feature.icon === 'ClipFlowLogo' ? (
                  <ClipFlowLogo variant="icon-only" size="small" showText={false} />
                ) : (
                  <feature.icon sx={{ color: 'primary.main', fontSize: 24 }} />
                )}
                <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                  {feature.text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Bottom Section - Play Store Feature Content */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            mt: 8
          }}
        >
          {/* Left Side - Play Store Text Content */}
          <Box 
            sx={{ 
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '50%' }
            }}
          >
            {/* Play Store Main Title */}
            <Typography 
              variant="h1" 
              component="h2" 
              sx={{ 
                fontSize: { xs: '3.5rem', md: '5rem' },
                fontWeight: 800,
                mb: 2,
                letterSpacing: '-0.02em',
                color: 'white',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                animation: 'fadeInLeft 1s ease-out 1.2s both'
              }}
            >
              ClipFlow
            </Typography>
            
            {/* Play Store Subtitle */}
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                mb: 4,
                fontWeight: 500,
                fontSize: { xs: '1.5rem', md: '2rem' },
                lineHeight: 1.3,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                animation: 'fadeInLeft 1s ease-out 1.4s both'
              }}
            >
              Clipboard Manager + OCR
            </Typography>
          </Box>

          {/* Right Side - Play Store Visual Elements */}
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
                animation: 'fadeInRight 1s ease-out 1.6s both'
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
        `}
      </style>
    </Box>
  )
}

export default CombinedHeroSection