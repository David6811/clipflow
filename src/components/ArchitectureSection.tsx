import React from 'react'
import {
  Box,
  Typography,
  Container,
  Stack,
  Chip,
  Paper
} from '@mui/material'
import {
  IntegrationInstructions,
  Apps,
  Security
} from '@mui/icons-material'

const ArchitectureSection: React.FC = () => {
  const architectureLayers = [
    {
      layer: 2,
      title: 'User Interface',
      description: 'Camera • Gallery • Clipboard History',
      color: '#ef4444',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      icon: Apps,
      modules: ['Camera Scanner', 'Gallery Picker', 'History View', 'Settings']
    },
    {
      layer: 1,
      title: 'Text Recognition',
      description: 'OCR Engine • Language Detection • Formatting',
      color: '#f97316',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      icon: IntegrationInstructions,
      modules: ['Google ML Kit', 'Text Processing', 'Language Detection', 'Format Cleanup']
    },
    {
      layer: 0,
      title: 'Data & Security',
      description: 'Local Storage • Encryption • Privacy',
      color: '#22c55e',
      bgColor: 'rgba(34, 197, 94, 0.1)',
      icon: Security,
      modules: ['Local Database', 'Data Encryption', 'Privacy Protection', 'Secure Storage']
    }
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Chip 
            label="How It Works" 
            sx={{ 
              mb: 4,
              bgcolor: 'rgba(84, 67, 66, 0.1)',
              color: 'primary.main',
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
              color: 'text.primary',
              letterSpacing: '-0.02em',
              mb: 3
            }}
          >
            Simple, Smart, Reliable
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              fontWeight: 400,
              color: 'text.secondary',
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            ClipFlow is built with a robust foundation to deliver fast, reliable text recognition every time you need it.
          </Typography>
        </Box>

        {/* Architecture Visualization */}
        <Box sx={{ position: 'relative', perspective: '1000px' }}>
          <Stack spacing={2} sx={{ transform: { md: 'rotateX(10deg)' } }}>
            {architectureLayers.map((layer, index) => (
              <Paper
                key={layer.layer}
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: layer.bgColor,
                  border: `2px solid ${layer.color}`,
                  borderRadius: 3,
                  position: 'relative',
                  transform: `translateZ(${layer.layer * 20}px)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: `translateZ(${layer.layer * 20 + 10}px) translateY(-2px)`,
                    boxShadow: `0 12px 32px ${layer.color}40`
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {/* Layer Number */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: layer.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3,
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.25rem'
                    }}
                  >
                    {layer.layer}
                  </Box>

                  {/* Layer Info */}
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600, 
                        color: 'text.primary',
                        mb: 0.5
                      }}
                    >
                      {layer.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '1rem'
                      }}
                    >
                      {layer.description}
                    </Typography>
                  </Box>

                  {/* Layer Icon */}
                  <layer.icon 
                    sx={{ 
                      fontSize: 36, 
                      color: layer.color,
                      ml: 2
                    }} 
                  />
                </Box>

                {/* Modules */}
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {layer.modules.map((module, moduleIndex) => (
                    <Chip
                      key={moduleIndex}
                      label={module}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                        color: layer.color,
                        fontWeight: 500,
                        fontSize: '0.75rem'
                      }}
                    />
                  ))}
                </Stack>

                {/* Dependency Arrow */}
                {index < architectureLayers.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderTop: `12px solid ${layer.color}`,
                      opacity: 0.6
                    }}
                  />
                )}
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Architecture Principles */}
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              mb: 4
            }}
          >
            Fast • Reliable • Private
          </Typography>
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={3} 
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 500,
                bgcolor: 'rgba(84, 67, 66, 0.05)',
                px: 3,
                py: 1.5,
                borderRadius: 2
              }}
            >
              📸 Instant Capture
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 500,
                bgcolor: 'rgba(46, 89, 132, 0.05)',
                px: 3,
                py: 1.5,
                borderRadius: 2
              }}
            >
              🔒 Private & Secure
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 500,
                bgcolor: 'rgba(143, 73, 66, 0.05)',
                px: 3,
                py: 1.5,
                borderRadius: 2
              }}
            >
              📱 Works Offline
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default ArchitectureSection