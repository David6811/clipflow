import React from 'react'
import {
  Box,
  Typography,
  Container,
  Badge
} from '@mui/material'
import {
  Backup,
  Restore,
  Schedule,
  CloudOff
} from '@mui/icons-material'

const BackupSection: React.FC = () => {
  const backupFeatures = [
    {
      icon: CloudOff,
      title: 'Local Storage Only',
      description: 'All backups remain on your device. No cloud storage, no external servers - complete privacy and control.'
    },
    {
      icon: Backup,
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
        background: 'linear-gradient(180deg, #d4c9bb 0%, rgba(212, 201, 187, 0.95) 30%, rgba(208, 195, 180, 0.9) 60%, rgba(200, 185, 170, 0.85) 85%, #c8b5a0 100%)',
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
            radial-gradient(circle at 20% 30%, rgba(46, 89, 132, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(143, 73, 66, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(110, 94, 15, 0.04) 0%, transparent 60%)
          `,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
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
    </Box>
  )
}

export default BackupSection