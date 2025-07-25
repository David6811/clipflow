import React from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton
} from '@mui/material'
import {
  ContentCopy,
  Search,
  PhoneAndroid
} from '@mui/icons-material'

const BankingShowcase: React.FC = () => {
  return (
    <Box sx={{ py: 10, background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #90CAF9 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <Box sx={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }} />
      <Box sx={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)' }} />
      
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1565C0' }}>
            ClipFlow in Action
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '600px', mx: 'auto', fontWeight: 400, color: '#1976D2', opacity: 0.8 }}>
            Experience seamless clipboard management with our intuitive mobile interface
          </Typography>
        </Box>

        {/* Three Detailed Phone Mockups */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-end',
          gap: { xs: 3, md: 6 },
          flexDirection: { xs: 'column', md: 'row' },
          perspective: '1000px'
        }}>
          
          {/* Phone 1 - Clipboard History */}
          <Box sx={{ 
            width: { xs: 300, md: 340 }, 
            height: { xs: 620, md: 680 },
            bgcolor: '#FFFFFF',
            borderRadius: '40px',
            border: '8px solid #1A1A1A',
            p: '20px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            transform: { md: 'rotateY(15deg) translateZ(50px)' },
            transition: 'all 0.3s ease'
          }}>
            {/* Status bar */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3,
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#000'
            }}>
              <span>9:41</span>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 4, height: 4, bgcolor: '#000', borderRadius: '50%' }} />
                <Box sx={{ width: 20, height: 12, bgcolor: '#000', borderRadius: 2 }} />
                <Box sx={{ width: 28, height: 14, bgcolor: '#34C759', borderRadius: 3 }} />
              </Box>
            </Box>

            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{ width: 40, height: 40, bgcolor: '#6750A4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                <ContentCopy sx={{ color: 'white', fontSize: 20 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000' }}>
                Clipboard
              </Typography>
              <Box sx={{ ml: 'auto', bgcolor: '#E3F2FD', px: 2, py: 0.5, borderRadius: 2 }}>
                <Typography variant="caption" sx={{ color: '#1565C0', fontWeight: 'bold' }}>
                  Smart Sync
                </Typography>
              </Box>
            </Box>

            {/* Clipboard Items */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Item 1 */}
              <Box sx={{ bgcolor: '#F3E5F5', p: 2, borderRadius: 3, border: '2px solid #9C27B0' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ width: 8, height: 8, bgcolor: '#9C27B0', borderRadius: '50%', mr: 1 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#4A148C' }}>
                    Meeting Notes
                  </Typography>
                  <Typography variant="caption" sx={{ ml: 'auto', color: '#666' }}>
                    2 min ago
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#333', fontSize: '12px' }}>
                  Project review at 3 PM tomorrow...
                </Typography>
              </Box>

              {/* Item 2 */}
              <Box sx={{ bgcolor: '#E8F5E8', p: 2, borderRadius: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Search sx={{ fontSize: 16, color: '#2E7D32', mr: 1 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1B5E20' }}>
                    OCR Result
                  </Typography>
                  <Typography variant="caption" sx={{ ml: 'auto', color: '#666' }}>
                    5 min ago
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#333', fontSize: '12px' }}>
                  Extracted text from screenshot
                </Typography>
              </Box>

              {/* Item 3 */}
              <Box sx={{ bgcolor: '#FFF3E0', p: 2, borderRadius: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneAndroid sx={{ fontSize: 16, color: '#F57C00', mr: 1 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#E65100' }}>
                    Contact Info
                  </Typography>
                  <Typography variant="caption" sx={{ ml: 'auto', color: '#666' }}>
                    1 hr ago
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#333', fontSize: '12px' }}>
                  john.doe@company.com
                </Typography>
              </Box>
            </Box>

            {/* Bottom Navigation */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', pt: 2, borderTop: '1px solid #E0E0E0' }}>
              <Box sx={{ textAlign: 'center' }}>
                <ContentCopy sx={{ fontSize: 24, color: '#6750A4' }} />
                <Typography variant="caption" sx={{ display: 'block', color: '#6750A4', fontWeight: 'bold' }}>
                  History
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Search sx={{ fontSize: 24, color: '#999' }} />
                <Typography variant="caption" sx={{ display: 'block', color: '#999' }}>
                  Search
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <PhoneAndroid sx={{ fontSize: 24, color: '#999' }} />
                <Typography variant="caption" sx={{ display: 'block', color: '#999' }}>
                  Settings
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Phone 2 - Main ClipFlow Screen (Center/Featured) */}
          <Box sx={{ 
            width: { xs: 300, md: 360 }, 
            height: { xs: 620, md: 720 },
            bgcolor: '#1A1A2E',
            borderRadius: '40px',
            border: '8px solid #1A1A1A',
            p: '20px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            transform: { md: 'scale(1.1) translateZ(100px)' },
            zIndex: 2
          }}>
            {/* Status bar */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 4,
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#FFF'
            }}>
              <span>9:41</span>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 4, height: 4, bgcolor: '#FFF', borderRadius: '50%' }} />
                <Box sx={{ width: 20, height: 12, bgcolor: '#FFF', borderRadius: 2 }} />
                <Box sx={{ width: 28, height: 14, bgcolor: '#34C759', borderRadius: 3 }} />
              </Box>
            </Box>

            {/* Logo and Title */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Box sx={{ 
                width: 80, 
                height: 80, 
                background: 'linear-gradient(135deg, #6750A4 0%, #9C75FF 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                position: 'relative'
              }}>
                <ContentCopy sx={{ fontSize: 36, color: 'white' }} />
                <Box sx={{ position: 'absolute', top: -2, right: -2, width: 20, height: 20, bgcolor: '#FF6B35', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>5</Typography>
                </Box>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
                ClipFlow
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Smart clipboard management that the world loves is just a tap away
              </Typography>
            </Box>

            {/* Feature Cards Carousel */}
            <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Main Feature Card */}
              <Box sx={{ 
                width: '100%',
                height: 180,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: 4,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                p: 3,
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative elements */}
                <Box sx={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%)', borderRadius: '50%', opacity: 0.1 }} />
                <Box sx={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, background: 'linear-gradient(135deg, #6750A4 0%, #9C75FF 50%)', borderRadius: '50%', opacity: 0.1 }} />
                
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                  OCR Technology
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Extract text from any image with our advanced AI-powered OCR engine
                </Typography>
              </Box>
            </Box>

            {/* CTA Button */}
            <Button 
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.9)', 
                color: '#1A1A2E',
                borderRadius: '25px',
                py: 2,
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'none',
                width: '100%',
                mb: 2,
                '&:hover': {
                  bgcolor: 'white'
                }
              }}
            >
              Tap your way →
            </Button>
          </Box>

          {/* Phone 3 - Settings/Security */}
          <Box sx={{ 
            width: { xs: 300, md: 340 }, 
            height: { xs: 620, md: 680 },
            bgcolor: '#FFFFFF',
            borderRadius: '40px',
            border: '8px solid #1A1A1A',
            p: '20px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            transform: { md: 'rotateY(-15deg) translateZ(50px)' }
          }}>
            {/* Status bar */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3,
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#000'
            }}>
              <span>9:41</span>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 4, height: 4, bgcolor: '#000', borderRadius: '50%' }} />
                <Box sx={{ width: 20, height: 12, bgcolor: '#000', borderRadius: 2 }} />
                <Box sx={{ width: 28, height: 14, bgcolor: '#34C759', borderRadius: 3 }} />
              </Box>
            </Box>

            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <IconButton sx={{ p: 0, mr: 2 }}>
                <Box sx={{ fontSize: '24px' }}>←</Box>
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>
                Privacy Settings
              </Typography>
              <Typography variant="body2" sx={{ ml: 'auto', color: '#666' }}>
                3 of 6
              </Typography>
            </Box>

            {/* Security Content */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000', mb: 2 }}>
                Data Protection
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 4 }}>
                Your clipboard data is encrypted and stored locally on your device
              </Typography>

              {/* Security Features */}
              <Box sx={{ bgcolor: '#F5F5F5', p: 3, borderRadius: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ width: 40, height: 40, bgcolor: '#4CAF50', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography sx={{ color: 'white', fontSize: '18px' }}>✓</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000' }}>
                      End-to-End Encryption
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      AES-256 encryption enabled
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ width: 40, height: 40, bgcolor: '#2196F3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <PhoneAndroid sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000' }}>
                      Local Storage Only
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      No cloud synchronization
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: 40, height: 40, bgcolor: '#FF9800', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography sx={{ color: 'white', fontSize: '18px' }}>🔒</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000' }}>
                      Auto-Clear History
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Configurable retention period
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Continue Button */}
              <Button 
                variant="contained"
                sx={{ 
                  bgcolor: '#000', 
                  color: 'white',
                  borderRadius: '25px',
                  py: 2,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  mt: 'auto'
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default BankingShowcase