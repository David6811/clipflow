import React from 'react'
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  Chip
} from '@mui/material'
import {
  Shield,
  Fingerprint,
  VpnKey,
  TextFields,
  Storage
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
      title: 'SQLCipher Database Encryption',
      description: 'Military-grade AES-256 encryption for all stored text extractions and image data',
      icon: Storage,
      color: '#2E5984', // Professional blue
      bgColor: 'rgba(46, 89, 132, 0.1)',
      features: ['AES-256 Encryption', 'SQLCipher 4.0', 'Secure Key Derivation', 'Database Integrity']
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
        background: 'linear-gradient(180deg, #e8ddd4 0%, rgba(232, 221, 212, 0.95) 30%, rgba(225, 210, 195, 0.9) 60%, rgba(220, 200, 180, 0.85) 85%, #d4c9bb 100%)',
        color: 'text.primary',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 20%, rgba(46, 89, 132, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(143, 73, 66, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(110, 94, 15, 0.06) 0%, transparent 60%)
          `,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Chip 
            label="Enterprise Security Architecture" 
            sx={{ 
              mb: 4,
              bgcolor: 'rgba(46, 89, 132, 0.15)',
              color: '#2E5984',
              fontWeight: 600,
              fontSize: '0.875rem',
              px: 2,
              py: 1,
              border: '1px solid rgba(46, 89, 132, 0.3)'
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
              maxWidth: '800px', 
              mx: 'auto', 
              fontWeight: 400,
              color: 'text.secondary',
              opacity: 0.8,
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            ClipFlow&apos;s multi-layered security architecture protects your captured text, screenshots, and OCR results with enterprise-grade encryption. Every note, tag, and extracted text stays encrypted on your device.
          </Typography>
        </Box>

        {/* Central Shield Visualization */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: 300, md: 400 },
              height: { xs: 300, md: 400 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Outer Ring - Master Password System */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '3px solid #6E5E0F',
                bgcolor: 'rgba(110, 94, 15, 0.05)',
                animation: 'securityPulse 4s ease-in-out infinite'
              }}
            />
            
            {/* Second Ring - Biometric Authentication */}
            <Box
              sx={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                border: '3px solid #8f4942',
                bgcolor: 'rgba(143, 73, 66, 0.08)',
                animation: 'securityPulse 3.2s ease-in-out infinite'
              }}
            />
            
            {/* Third Ring - SQLCipher Encryption */}
            <Box
              sx={{
                position: 'absolute',
                width: '60%',
                height: '60%',
                borderRadius: '50%',
                border: '3px solid #2E5984',
                bgcolor: 'rgba(46, 89, 132, 0.1)',
                animation: 'securityPulse 2.4s ease-in-out infinite'
              }}
            />

            {/* Inner Ring - Note-Level Encryption */}
            <Box
              sx={{
                position: 'absolute',
                width: '40%',
                height: '40%',
                borderRadius: '50%',
                border: '3px solid #544342',
                bgcolor: 'rgba(84, 67, 66, 0.08)',
                animation: 'securityPulse 1.8s ease-in-out infinite'
              }}
            />

            {/* Central Security Core */}
            <Box
              sx={{
                width: 90,
                height: 90,
                bgcolor: '#2E5984',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(46, 89, 132, 0.6), inset 0 2px 0 rgba(255,255,255,0.1)',
                animation: 'securityGlow 3s ease-in-out infinite alternate',
                border: '2px solid rgba(248, 245, 242, 0.2)'
              }}
            >
              <Shield sx={{ fontSize: 52, color: '#f8f5f2', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
            </Box>
          </Box>
        </Box>

        {/* Security Layers */}
        <Stack spacing={4} sx={{ mb: 10 }}>
          {securityLayers.map((layer, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.85)',
                border: `1px solid ${layer.color}40`,
                borderRadius: 3,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 24px ${layer.color}30`,
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  border: `1px solid ${layer.color}60`
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: layer.bgColor,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3,
                      border: `2px solid ${layer.color}`
                    }}
                  >
                    <layer.icon sx={{ fontSize: 32, color: layer.color }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1
                      }}
                    >
                      {layer.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.1rem'
                      }}
                    >
                      {layer.description}
                    </Typography>
                  </Box>
                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
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
              </CardContent>
            </Card>
          ))}
        </Stack>

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

      {/* CSS Animations */}
      <style>
        {`
          @keyframes securityPulse {
            0%, 100% { 
              opacity: 0.4; 
              transform: scale(1); 
              border-width: 3px;
            }
            50% { 
              opacity: 0.8; 
              transform: scale(1.008); 
              border-width: 4px;
            }
          }
          @keyframes securityGlow {
            0% { 
              box-shadow: 0 0 40px rgba(46, 89, 132, 0.6), inset 0 2px 0 rgba(255,255,255,0.1), 0 0 80px rgba(46, 89, 132, 0.2);
              transform: scale(1);
            }
            100% { 
              box-shadow: 0 0 60px rgba(46, 89, 132, 0.9), inset 0 2px 0 rgba(255,255,255,0.2), 0 0 120px rgba(46, 89, 132, 0.4);
              transform: scale(1.02);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default SecuritySection