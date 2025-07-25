import React from 'react'
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent
} from '@mui/material'
import {
  ContentCopy,
  Search,
  PhoneAndroid
} from '@mui/icons-material'

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Why Choose ClipFlow?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', fontWeight: 400 }}>
            Powerful features designed to revolutionize your Android clipboard experience
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          <Card elevation={1}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ 
                width: 48, 
                height: 48, 
                bgcolor: 'primary.light', 
                borderRadius: 2, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                mb: 2 
              }}>
                <ContentCopy color="primary" />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Smart Organization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Automatically categorize and organize your clipboard items with intelligent tagging
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={1}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ 
                width: 48, 
                height: 48, 
                bgcolor: 'secondary.light', 
                borderRadius: 2, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                mb: 2 
              }}>
                <Search color="secondary" />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Fast Search
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Find any copied content instantly with powerful search and filtering capabilities
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={1} sx={{ gridColumn: { md: 'span 2', lg: 'span 1' } }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ 
                width: 48, 
                height: 48, 
                bgcolor: 'tertiary.light', 
                borderRadius: 2, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                mb: 2 
              }}>
                <PhoneAndroid sx={{ color: 'tertiary.main' }} />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Privacy First
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All data stays on your device. No cloud sync, no tracking, complete privacy
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default FeaturesSection