import { Box, Container, Typography, Chip, Stack } from '@mui/material'

const AboutUsSection = () => {

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Philosophy & Values Section */}
        <Box sx={{ mb: 10 }}>
          {/* Main Philosophy */}
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.8rem', md: '4rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #1E293B 0%, #3B82F6 50%, #8B5CF6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                letterSpacing: '-0.03em'
              }}
            >
              Easy. Convenient. Simple.
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#64748B',
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 8
              }}
            >
              We believe great technology should feel natural and intuitive. 
              ClipFlow makes clipboard management effortless for everyone.
            </Typography>

          </Box>
          
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: 'center',
            p: 8,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(59, 130, 246, 0.15)'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#1E293B',
              mb: 3
            }}
          >
            Join Our Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: '1.1rem',
              mb: 4
            }}
          >
            Every great app starts with a simple idea and passionate creators. 
            We're just getting started, and we'd love for you to be part of this journey 
            as we revolutionize clipboard management together.
          </Typography>
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Chip
              label="100% Offline 🔒"
              sx={{
                background: 'rgba(34, 197, 94, 0.1)',
                color: '#22C55E',
                fontWeight: 600,
                px: 2,
                py: 1
              }}
            />
            <Chip
              label="Smart OCR 📱"
              sx={{
                background: 'rgba(59, 130, 246, 0.1)',
                color: '#3B82F6',
                fontWeight: 600,
                px: 2,
                py: 1
              }}
            />
            <Chip
              label="Built for Everyone 🌍"
              sx={{
                background: 'rgba(139, 92, 246, 0.1)',
                color: '#8B5CF6',
                fontWeight: 600,
                px: 2,
                py: 1
              }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUsSection