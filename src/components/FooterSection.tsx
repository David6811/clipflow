import React from 'react'
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton
} from '@mui/material'
import {
  DocumentScanner,
  Email,
  GitHub,
  Twitter,
  LinkedIn
} from '@mui/icons-material'

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #e8ddd4 0%, rgba(220, 200, 180, 0.95) 50%, rgba(200, 180, 160, 0.9) 100%)',
        color: 'text.primary',
        py: 4
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'secondary.main',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2
              }}
            >
              <DocumentScanner sx={{ fontSize: 24, color: 'white' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'text.primary'
              }}
            >
              ClipFlow
            </Typography>
          </Box>

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