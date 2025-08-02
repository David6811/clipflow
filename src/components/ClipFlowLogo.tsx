import React from 'react'
import { Box, Typography } from '@mui/material'
import { DocumentScanner } from '@mui/icons-material'

interface ClipFlowLogoProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'horizontal' | 'icon-only' | 'vertical'
  onClick?: () => void
  showText?: boolean
}

const ClipFlowLogo: React.FC<ClipFlowLogoProps> = ({ 
  size = 'medium', 
  variant = 'horizontal',
  onClick,
  showText = true
}) => {
  const sizeConfig = {
    small: {
      iconContainer: 32,
      iconSize: 18,
      titleSize: '1.125rem',
      subtitleSize: '0.7rem',
      borderRadius: 2
    },
    medium: {
      iconContainer: 44,
      iconSize: 26,
      titleSize: '1.5rem',
      subtitleSize: '0.8rem',
      borderRadius: 2.5
    },
    large: {
      iconContainer: 64,
      iconSize: 36,
      titleSize: '2rem',
      subtitleSize: '1rem',
      borderRadius: 3
    }
  }

  const config = sizeConfig[size]

  if (variant === 'icon-only') {
    return (
      <Box
        sx={{
          width: config.iconContainer,
          height: config.iconContainer,
          bgcolor: 'secondary.main',
          borderRadius: config.borderRadius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)',
          '&:hover': onClick ? {
            opacity: 0.9,
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          } : {}
        }}
        onClick={onClick}
      >
        <DocumentScanner sx={{ fontSize: config.iconSize, color: 'white' }} />
      </Box>
    )
  }

  if (variant === 'vertical') {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'opacity 0.2s ease',
          '&:hover': onClick ? { opacity: 0.8 } : {}
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            width: config.iconContainer,
            height: config.iconContainer,
            bgcolor: 'secondary.main',
            borderRadius: config.borderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: showText ? 1.5 : 0,
            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)'
          }}
        >
          <DocumentScanner sx={{ fontSize: config.iconSize, color: 'white' }} />
        </Box>
        {showText && (
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                color: 'text.primary',
                fontSize: config.titleSize,
                lineHeight: 1,
                letterSpacing: '-0.01em'
              }}
            >
              ClipFlow
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'text.secondary',
                fontSize: config.subtitleSize,
                fontWeight: 500
              }}
            >
              Smart Clipboard
            </Typography>
          </Box>
        )}
      </Box>
    )
  }

  // Default horizontal variant
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'opacity 0.2s ease',
        '&:hover': onClick ? { opacity: 0.8 } : {}
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: config.iconContainer,
          height: config.iconContainer,
          bgcolor: 'secondary.main',
          borderRadius: config.borderRadius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: showText ? 2.5 : 0,
          boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)'
        }}
      >
        <DocumentScanner sx={{ fontSize: config.iconSize, color: 'white' }} />
      </Box>
      {showText && (
        <Box>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              color: 'text.primary',
              fontSize: config.titleSize,
              lineHeight: 1,
              letterSpacing: '-0.01em'
            }}
          >
            ClipFlow
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'text.secondary',
              fontSize: config.subtitleSize,
              fontWeight: 500
            }}
          >
            Smart Clipboard
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ClipFlowLogo