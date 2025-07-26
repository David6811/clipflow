import React from 'react'
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  Chip,
  Badge
} from '@mui/material'
import {
  Shield,
  Fingerprint,
  VpnKey,
  VisibilityOff,
  VerifiedUser,
  LockClock
} from '@mui/icons-material'

const SecuritySection: React.FC = () => {
  const securityLayers = [
    {
      title: 'App Protection',
      description: 'Secure your clipboard with password or biometric authentication',
      icon: VpnKey,
      color: '#6E5E0F', // Muted gold
      bgColor: 'rgba(110, 94, 15, 0.1)',
      features: ['Password Lock', 'PIN Protection', 'Auto-Lock Timer', 'Quick Access']
    },
    {
      title: 'Biometric Security',
      description: 'Use your fingerprint or face to unlock and access your clipboard',
      icon: Fingerprint,
      color: '#8f4942', // Warm terracotta
      bgColor: 'rgba(143, 73, 66, 0.1)',
      features: ['Fingerprint', 'Face Recognition', 'Pattern Lock', 'Quick Unlock']
    },
    {
      title: 'Data Encryption',
      description: 'All clipboard data is encrypted and stored securely on your device',
      icon: Shield,
      color: '#2E5984', // Professional blue
      bgColor: 'rgba(46, 89, 132, 0.1)',
      features: ['Strong Encryption', 'Secure Storage', 'Local Database', 'No Cloud Sync']
    }
  ]

  const securityFeatures = [
    {
      icon: VisibilityOff,
      title: 'Complete Privacy',
      description: 'No data collection, tracking, or cloud storage'
    },
    {
      icon: VerifiedUser,
      title: 'Industry Standards',
      description: 'Built with proven security best practices'
    },
    {
      icon: LockClock,
      title: 'Smart Cleanup',
      description: 'Automatically clear old clipboard items'
    }
  ]

  return (
    <Box 
      sx={{ 
        py: { xs: 10, md: 16 }, 
        bgcolor: '#231918',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
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
            radial-gradient(circle at 20% 30%, rgba(46, 89, 132, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(143, 73, 66, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(110, 94, 15, 0.05) 0%, transparent 60%)
          `,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Chip 
            label="Privacy & Security" 
            sx={{ 
              mb: 4,
              bgcolor: 'rgba(46, 89, 132, 0.2)',
              color: '#4A7AA8',
              fontWeight: 600,
              fontSize: '0.875rem'
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
              mb: 3
            }}
          >
            Your Privacy Matters
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto', 
              fontWeight: 400,
              opacity: 0.9,
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            ClipFlow keeps your data completely private and secure. Everything stays on your device with no cloud sync or data collection.
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
            {/* Outer Ring - Application Security */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '3px solid #6E5E0F',
                bgcolor: 'rgba(110, 94, 15, 0.05)',
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
            
            {/* Middle Ring - Authentication */}
            <Box
              sx={{
                position: 'absolute',
                width: '75%',
                height: '75%',
                borderRadius: '50%',
                border: '3px solid #8f4942',
                bgcolor: 'rgba(143, 73, 66, 0.08)',
                animation: 'pulse 2.5s ease-in-out infinite'
              }}
            />
            
            {/* Inner Ring - Database Encryption */}
            <Box
              sx={{
                position: 'absolute',
                width: '50%',
                height: '50%',
                borderRadius: '50%',
                border: '3px solid #2E5984',
                bgcolor: 'rgba(46, 89, 132, 0.1)',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />

            {/* Central Shield */}
            <Box
              sx={{
                width: 80,
                height: 80,
                bgcolor: '#2E5984',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(46, 89, 132, 0.5)',
                animation: 'glow 2s ease-in-out infinite alternate'
              }}
            >
              <Shield sx={{ fontSize: 48, color: 'white' }} />
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
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${layer.color}`,
                borderRadius: 3,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 32px ${layer.color}40`,
                  bgcolor: 'rgba(255, 255, 255, 0.08)'
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
                        color: 'white',
                        mb: 1
                      }}
                    >
                      {layer.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
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

        {/* Additional Security Features */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 6,
              color: 'white'
            }}
          >
            Built for Privacy
          </Typography>
          
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
          >
            {securityFeatures.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  maxWidth: 280,
                  p: 3
                }}
              >
                <Badge
                  badgeContent="✓"
                  sx={{
                    '& .MuiBadge-badge': {
                      bgcolor: '#22c55e',
                      color: 'white',
                      fontSize: '0.75rem'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    <feature.icon sx={{ fontSize: 36, color: 'white' }} />
                  </Box>
                </Badge>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 1
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Security Badge */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontStyle: 'italic',
              fontSize: '1.125rem'
            }}
          >
            &ldquo;Your clipboard data stays private and secure&rdquo;
          </Typography>
        </Box>
      </Container>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.02); }
          }
          @keyframes glow {
            0% { box-shadow: 0 0 30px rgba(46, 89, 132, 0.5); }
            100% { box-shadow: 0 0 40px rgba(46, 89, 132, 0.8); }
          }
        `}
      </style>
    </Box>
  )
}

export default SecuritySection