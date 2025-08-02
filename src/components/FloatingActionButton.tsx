import React from 'react'
import { Fab } from '@mui/material'
import ClipFlowLogo from './ClipFlowLogo'

const FloatingActionButton: React.FC = () => {
  return (
    <Fab 
      color="secondary"
      aria-label="ClipFlow - Smart Clipboard"
      sx={{ 
        position: 'fixed', 
        bottom: 32, 
        right: 32,
        zIndex: 1000,
        width: 64,
        height: 64,
        bgcolor: 'secondary.main',
        color: 'white',
        boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
        '&:hover': {
          bgcolor: 'secondary.dark',
          boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
          transform: 'translateY(-2px)'
        }
      }}
    >
      <ClipFlowLogo 
        size="medium"
        variant="icon-only"
        showText={false}
      />
    </Fab>
  )
}

export default FloatingActionButton