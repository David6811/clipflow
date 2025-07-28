import React from 'react'
import {
  Box,
  Typography,
  Container,
  Badge
} from '@mui/material'
import {
  Restore,
  Schedule,
  Storage,
  Save
} from '@mui/icons-material'

const BackupSection: React.FC = () => {
  const backupFeatures = [
    {
      icon: Storage,
      title: 'Local Storage Only',
      description: 'All backups remain on your device. No cloud storage, no external servers - complete privacy and control.'
    },
    {
      icon: Save,
      title: 'Manual Backup',
      description: 'Create secure backups of your clipboard history, OCR results, and organized notes anytime with full encryption.'
    },
    {
      icon: Restore,
      title: 'Quick Restore',
      description: 'Restore your clipboard data from backups instantly. Seamlessly recover notes, tags, and extracted text.'
    },
    {
      icon: Schedule,
      title: 'Auto Backup',
      description: 'Automatic scheduled backups ensure your data is always protected. Configure backup frequency and retention policies.'
    }
  ]

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(232,240,247,0.5) 0%, rgba(232,240,247,0.6) 100%)',
        color: 'text.primary',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Backup & Restore
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
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Protect your clipboard data with comprehensive backup solutions. 
            Manual, automatic, and scheduled backups keep your OCR results safe and accessible.
          </Typography>
        </Box>
        
        {/* Backup Features */}
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 4,
              justifyItems: 'center'
            }}
          >
            {backupFeatures.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  maxWidth: 280,
                  p: 3,
                  width: '100%'
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
                      bgcolor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      mx: 'auto',
                      border: '1px solid rgba(0,0,0,0.1)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                    }}
                  >
                    <feature.icon sx={{ fontSize: 36, color: 'text.primary' }} />
                  </Box>
                </Badge>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom Quote */}
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
            &ldquo;Your clipboard data, securely backed up and always recoverable&rdquo;
          </Typography>
        </Box>
      </Container>

      {/* CSS for floating animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(18deg);
            }
            50% { 
              transform: translateY(-12px) rotate(18deg);
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

export default BackupSection