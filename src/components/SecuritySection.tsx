import React from 'react'
import {
  Box,
  Typography,
  Container,
  Stack,
  Chip
} from '@mui/material'
import {
  Fingerprint,
  VpnKey,
  TextFields
} from '@mui/icons-material'

const SecuritySection: React.FC = () => {
  const securityLayers = [
    {
      title: 'Master Password System',
      description: 'Enterprise-grade authentication protecting your OCR captured text',
      icon: VpnKey,
      color: '#6E5E0F', // Muted gold
      bgColor: 'rgba(110, 94, 15, 0.1)',
      features: ['Master Password', 'Auto-Lock Timer', 'Session Security', 'Quick Authentication']
    },
    {
      title: 'Fingerprint Authentication',
      description: 'Secure biometric access for Android devices with hardware fingerprint sensors',
      icon: Fingerprint,
      color: '#8f4942', // Warm terracotta
      bgColor: 'rgba(143, 73, 66, 0.1)',
      features: ['Hardware Fingerprint', 'Android KeyStore', 'Secure Enclave', 'Fast Unlock']
    },
    {
      title: 'Note-Level Encryption',
      description: 'Individual encryption for each OCR result, screenshot, and organized note collection',
      icon: TextFields,
      color: '#544342', // ClipFlow brown
      bgColor: 'rgba(84, 67, 66, 0.1)',
      features: ['Per-Note Encryption', 'Data Protection', 'Secure Storage']
    }
  ]


  return (
    <Box 
      sx={{ 
        py: { xs: 10, md: 16 },
        background: `
          linear-gradient(180deg, rgba(248,250,252,0.95) 0%, rgba(241,245,249,0.92) 20%, rgba(226,232,240,0.88) 50%, rgba(203,213,225,0.85) 80%, rgba(191,201,215,0.9) 100%),
          radial-gradient(ellipse at 30% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 70%)
        `,
        color: 'text.primary',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(226, 232, 240, 0.6)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.6)'
      }}
    >
      {/* Professional Geometric Background Elements */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '-60px', 
          left: '-60px', 
          width: '280px', 
          height: '180px', 
          borderRadius: '16px', 
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(59, 130, 246, 0.04) 100%)',
          transform: 'rotate(-12deg)',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(255,255,255,0.2)',
          animation: 'float 8s ease-in-out infinite'
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: '-80px', 
          right: '-80px', 
          width: '320px', 
          height: '200px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%)',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255,255,255,0.15)',
          animation: 'float 10s ease-in-out infinite reverse'
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '40%', 
          left: '8%', 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
          backdropFilter: 'blur(1px)',
          animation: 'pulse 6s ease-in-out infinite'
        }} 
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Enterprise Security" 
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
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.2rem', md: '3rem' },
              color: 'text.primary',
              letterSpacing: '-0.02em',
              mb: 3
            }}
          >
            App Authentication Security
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto', 
              fontWeight: 400,
              color: 'text.secondary',
              opacity: 0.8,
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            Multi-layered authentication architecture protecting access to your captured text, screenshots, and OCR results with comprehensive access controls.
          </Typography>
        </Box>

        {/* Security Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 8
          }}
        >
          {securityLayers.map((layer, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 4,
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  bgcolor: 'rgba(255, 255, 255, 0.95)'
                }
              }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  bgcolor: layer.bgColor,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  border: `2px solid ${layer.color}`
                }}
              >
                <layer.icon sx={{ fontSize: 36, color: layer.color }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 2
                }}
              >
                {layer.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                {layer.description}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent="center">
                {layer.features.map((feature, featureIndex) => (
                  <Chip
                    key={featureIndex}
                    label={feature}
                    size="small"
                    sx={{
                      bgcolor: `${layer.color}20`,
                      color: layer.color,
                      fontWeight: 500,
                      border: `1px solid ${layer.color}40`
                    }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Security Badge */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: '1.125rem',
              opacity: 0.8
            }}
          >
            &ldquo;Enterprise-grade security for your most sensitive OCR data&rdquo;
          </Typography>
        </Box>
      </Container>

      {/* CSS for floating animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(-12deg);
            }
            50% { 
              transform: translateY(-15px) rotate(-12deg);
            }
          }
          
          @keyframes pulse {
            0%, 100% { 
              opacity: 0.6;
              transform: scale(1);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default SecuritySection