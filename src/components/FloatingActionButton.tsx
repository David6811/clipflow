import React from 'react'
import { Fab } from '@mui/material'
import { ContentCopy } from '@mui/icons-material'

const FloatingActionButton: React.FC = () => {
  return (
    <Fab 
      color="primary"
      aria-label="copy"
      sx={{ 
        position: 'fixed', 
        bottom: 32, 
        right: 32,
        zIndex: 1000
      }}
    >
      <ContentCopy />
    </Fab>
  )
}

export default FloatingActionButton