import React, { useState, useEffect, useRef, useMemo } from 'react'
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
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Preload images when component becomes visible
          phones.forEach(phone => {
            const img = new Image()
            img.src = phone.image
          })
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-play carousel (only when visible)
  useEffect(() => {
    if (!autoPlay || !isVisible) return

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCenterPhone(prevCenter => {
          const nextPhone = (prevCenter + 1) % 3
          setIsTransitioning(true)
          // Use requestAnimationFrame for smoother animations
          requestAnimationFrame(() => {
            setTimeout(() => setIsTransitioning(false), 250)
          })
          return nextPhone
        })
      }
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [autoPlay, isTransitioning, isVisible])

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

  // Memoize phone style calculations for better performance
  const getPhoneStyle = useMemo(() => (phoneIndex: number) => {
    let transform = ''
    let zIndex = 1
    let order = phoneIndex + 1 // Default order based on original index
    let width = { xs: 240, md: 280 }
    let height = { xs: 500, md: 560 }

    if (phoneIndex === centerPhone) {
      // Center phone
      transform = 'translate3d(0, 0, 100px) scale3d(1.1, 1.1, 1)'
      zIndex = 3
      order = 2 // Always center position
      width = { xs: 240, md: 300 }
      height = { xs: 500, md: 600 }
    } else {
      // Side phones - determine left/right based on their index relative to center
      const leftIndex = (centerPhone - 1 + 3) % 3
      const rightIndex = (centerPhone + 1) % 3
      
      if (phoneIndex === leftIndex) {
        transform = 'translate3d(0, 0, 50px) rotateY(15deg)'
        zIndex = 2
        order = 1 // Left position
      } else if (phoneIndex === rightIndex) {
        transform = 'translate3d(0, 0, 50px) rotateY(-15deg)'
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
      transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), order 0.25s ease',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      cursor: 'pointer',
      '&:hover': {
        transform: { md: `${transform} translate3d(0, -5px, 0)` }
      },
      '&:active': {
        transform: { md: `${transform}` }
      }
    }
  }, [centerPhone])

  return (
    <Box 
      ref={sectionRef}
      sx={{ py: 10, background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #90CAF9 100%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background decorative elements */}
      <Box sx={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }} />
      <Box sx={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)' }} />
      
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1565C0' }}>
            ClipFlow in Action
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '600px', mx: 'auto', fontWeight: 400, color: '#1976D2', opacity: 0.8 }}>
            Experience seamless clipboard management with our intuitive mobile interface
          </Typography>
        </Box>

        {/* Interactive Phone Carousel */}
        {isVisible ? (
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
                    setTimeout(() => setIsTransitioning(false), 250)
                  })
                  // Resume auto-play after 8 seconds of user inactivity
                  setTimeout(() => setAutoPlay(true), 8000)
                }
              }}
            >
              {imagesLoaded.has(index) ? (
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
                />
              ) : (
                <Box
                  component="img"
                  src={phone.image}
                  alt={phone.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '32px',
                    backgroundColor: '#f5f5f5',
                    transition: 'opacity 0.3s ease',
                    opacity: 0
                  }}
                  onLoad={(e) => {
                    e.target.style.opacity = '1';
                    setImagesLoaded(prev => new Set([...prev, index]));
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
              )}
            </Box>
          ))}
          </Box>
        ) : (
          // Loading skeleton
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'flex-end',
              gap: { xs: 3, md: 6 },
              flexDirection: { xs: 'column', md: 'row' },
              height: { xs: '400px', md: '600px' }
            }}
          >
            {[1, 2, 3].map((item) => (
              <Box
                key={item}
                sx={{
                  width: { xs: 240, md: item === 2 ? 300 : 280 },
                  height: { xs: 500, md: item === 2 ? 600 : 560 },
                  borderRadius: '40px',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  animation: 'skeleton-pulse 1.5s ease-in-out infinite'
                }}
              />
            ))}
          </Box>
        )}
      </Container>

      {/* CSS for skeleton animation */}
      <style>
        {`
          @keyframes skeleton-pulse {
            0%, 100% { 
              opacity: 0.4;
            }
            50% { 
              opacity: 0.7;
            }
          }
        `}
      </style>
    </Box>
  )
}

export default BankingShowcase