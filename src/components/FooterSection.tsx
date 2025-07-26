import React from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Link,
  Divider,
  IconButton
} from '@mui/material'
import {
  DocumentScanner,
  Email,
  GitHub,
  Twitter,
  LinkedIn,
  Android,
  Security,
  CloudOff
} from '@mui/icons-material'

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Security', href: '#security' },
      { label: 'Download', href: '#download' },
      { label: 'Updates', href: '#updates' }
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Bug Reports', href: '#bugs' },
      { label: 'Feature Requests', href: '#requests' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'License', href: '#license' },
      { label: 'Open Source', href: '#opensource' }
    ]
  }

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #e8ddd4 0%, rgba(220, 200, 180, 0.95) 50%, rgba(200, 180, 160, 0.9) 100%)',
        color: 'text.primary',
        pt: { xs: 6, md: 8 },
        pb: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    w: 48,
                    h: 48,
                    bgcolor: 'secondary.main',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}
                >
                  <DocumentScanner sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary'
                  }}
                >
                  ClipFlow
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  mb: 3
                }}
              >
                Intelligent clipboard management with powerful OCR capabilities. 
                Secure, offline, and designed for Android productivity.
              </Typography>
              
              {/* Feature Highlights */}
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CloudOff sx={{ fontSize: 16, color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Works completely offline
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Security sx={{ fontSize: 16, color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Enterprise-grade security
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Android sx={{ fontSize: 16, color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Android 7.0+ supported
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {/* Product Links */}
              <Grid item xs={6} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 2
                  }}
                >
                  Product
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.product.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: 'secondary.main',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Support Links */}
              <Grid item xs={6} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 2
                  }}
                >
                  Support
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.support.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: 'secondary.main',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Legal Links */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 2
                  }}
                >
                  Legal
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.legal.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: 'secondary.main',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(84, 67, 66, 0.2)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: 3
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            © {currentYear} ClipFlow. All rights reserved. Made with ❤️ for Android productivity.
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
              <Email sx={{ fontSize: 20 }} />
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
              <GitHub sx={{ fontSize: 20 }} />
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
              <Twitter sx={{ fontSize: 20 }} />
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
              <LinkedIn sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default FooterSection