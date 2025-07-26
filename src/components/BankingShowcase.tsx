import React, { useState, useEffect } from 'react'
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
  const [centerPhone, setCenterPhone] = useState<number>(1) // 0: Phone1, 1: Phone2, 2: Phone3
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(true)

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCenterPhone(prevCenter => {
          const nextPhone = (prevCenter + 1) % 3
          setIsTransitioning(true)
          // Use requestAnimationFrame for smoother animations
          requestAnimationFrame(() => {
            setTimeout(() => setIsTransitioning(false), 300)
          })
          return nextPhone
        })
      }
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [autoPlay, isTransitioning])

  // Phone configuration
  const phones = [
    {
      id: 0,
      name: 'Phone 1',
      image: '/clipflow/1.png',
      alt: 'Clipflow App Interface - Screen 1'
    },
    {
      id: 1,
      name: 'Phone 2', 
      image: '/clipflow/2.png',
      alt: 'Clipflow App Interface - Screen 2'
    },
    {
      id: 2,
      name: 'Phone 3',
      image: '/clipflow/3.png', 
      alt: 'Clipflow App Interface - Screen 3'
    }
  ]

  // Calculate phone positions and styles based on centerPhone
  const getPhoneStyle = (phoneIndex: number) => {
    let transform = ''
    let zIndex = 1
    let order = phoneIndex + 1 // Default order based on original index
    let width = { xs: 240, md: 280 }
    let height = { xs: 500, md: 560 }

    if (phoneIndex === centerPhone) {
      // Center phone
      transform = 'scale(1.1) translateZ(100px)'
      zIndex = 3
      order = 2 // Always center position
      width = { xs: 240, md: 300 }
      height = { xs: 500, md: 600 }
    } else {
      // Side phones - determine left/right based on their index relative to center
      const leftIndex = (centerPhone - 1 + 3) % 3
      const rightIndex = (centerPhone + 1) % 3
      
      if (phoneIndex === leftIndex) {
        transform = 'rotateY(15deg) translateZ(50px)'
        zIndex = 2
        order = 1 // Left position
      } else if (phoneIndex === rightIndex) {
        transform = 'rotateY(-15deg) translateZ(50px)'
        zIndex = 2
        order = 3 // Right position
      }
    }

    return {
      width,
      height,
      borderRadius: '40px',
      border: '8px solid #1A1A1A',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: phoneIndex === centerPhone 
        ? '0 30px 60px rgba(0,0,0,0.3)' 
        : '0 20px 40px rgba(0,0,0,0.15)',
      transform: { md: transform },
      zIndex,
      order: { md: order }, // This controls the physical position
      transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease, order 0.3s ease',
      willChange: 'transform, box-shadow, order',
      cursor: 'pointer',
      '&:hover': {
        transform: { md: `${transform} translateY(-5px)` },
        boxShadow: phoneIndex === centerPhone 
          ? '0 35px 70px rgba(0,0,0,0.4)' 
          : '0 25px 50px rgba(0,0,0,0.25)'
      },
      '&:active': {
        transform: { md: `${transform} translateY(0px)` }
      }
    }
  }

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

        {/* Interactive Phone Carousel */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-end',
            gap: { xs: 3, md: 6 },
            flexDirection: { xs: 'column', md: 'row' },
            perspective: '1000px'
          }}
        >
          {phones.map((phone, index) => (
            <Box 
              key={phone.id}
              sx={getPhoneStyle(index)}
              onClick={() => {
                // Only trigger if this phone is not already in center and not transitioning
                if (!isTransitioning && centerPhone !== index) {
                  setAutoPlay(false) // Stop auto-play when user clicks
                  setIsTransitioning(true)
                  setCenterPhone(index)
                  // Use requestAnimationFrame for smoother animations
                  requestAnimationFrame(() => {
                    setTimeout(() => setIsTransitioning(false), 300)
                  })
                  // Resume auto-play after 8 seconds of user inactivity
                  setTimeout(() => setAutoPlay(true), 8000)
                }
              }}
            >
              <Box
                component="img"
                src={phone.image}
                alt={phone.alt}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '32px',
                  backgroundColor: '#f5f5f5'
                }}
                onError={(e) => {
                  console.error(`Failed to load ${phone.image}:`, e);
                  e.target.style.backgroundColor = '#f0f0f0';
                  e.target.style.display = 'flex';
                  e.target.style.alignItems = 'center';
                  e.target.style.justifyContent = 'center';
                  e.target.innerHTML = `${phone.name} not found`;
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default BankingShowcase