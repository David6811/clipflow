import React from 'react'
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton
} from '@mui/material'
import {
  Email,
  GitHub,
  Twitter,
  LinkedIn
} from '@mui/icons-material'
import ClipFlowLogo from './ClipFlowLogo'

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(248, 245, 242, 0.95)',
        backdropFilter: 'blur(10px)',
        color: 'text.primary',
        py: 6
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}
        >
          {/* Brand */}
          <ClipFlowLogo 
            size="small"
            variant="horizontal"
          />

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              textAlign: 'center'
            }}
          >
            © {currentYear} ClipFlow. All rights reserved.
          </Typography>

          {/* Social Links */}
          <Stack direction="row" spacing={1}>
            <IconButton
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'secondary.main',
                  bgcolor: 'rgba(46, 89, 132, 0.1)'
                }
              }}
            >
              <Email sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'secondary.main',
                  bgcolor: 'rgba(46, 89, 132, 0.1)'
                }
              }}
            >
              <GitHub sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'secondary.main',
                  bgcolor: 'rgba(46, 89, 132, 0.1)'
                }
              }}
            >
              <Twitter sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'secondary.main',
                  bgcolor: 'rgba(46, 89, 132, 0.1)'
                }
              }}
            >
              <LinkedIn sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default FooterSection