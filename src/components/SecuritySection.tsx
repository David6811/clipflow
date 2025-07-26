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
      description: 'Enterprise-grade authentication protecting your OCR captured text and images',
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
      features: ['Per-Note Encryption', 'OCR Result Security', 'Image Data Protection', 'Tag Encryption']
    }
  ]


  return (
    <Box 
      sx={{ 
        py: { xs: 10, md: 16 }, 
        background: 'linear-gradient(180deg, #e8ddd4 0%, rgba(232, 221, 212, 0.98) 20%, rgba(229, 218, 205, 0.95) 40%, rgba(225, 215, 200, 0.92) 60%, rgba(220, 210, 195, 0.95) 80%, #d4c9bb 100%)',
        color: 'text.primary',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
            Military-Grade OCR Security
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
            Multi-layered security architecture protecting your captured text, screenshots, and OCR results with enterprise-grade encryption.
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
                bgcolor: 'rgba(255, 255, 255, 0.8)',
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
    </Box>
  )
}

export default SecuritySection