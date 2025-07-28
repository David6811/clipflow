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
            setTimeout(() => setIsTransitioning(false), 1200)
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

  // Wide arc layout with center focus
  const getPhoneStyle = useMemo(() => (phoneIndex: number) => {
    // Calculate position in a wide arc
    const relativePosition = (phoneIndex - centerPhone + 3) % 3 // 0=left, 1=center, 2=right
    
    let x = 0
    let z = 0
    let y = 0
    let scale = 1
    let opacity = 1
    let phoneRotationY = 0
    let zIndex = 2
    
    if (relativePosition === 1) {
      // Center phone - fully visible, no rotation
      x = 0
      z = 0
      y = 0 // Centered vertically
      scale = 1
      opacity = 1
      phoneRotationY = 0
      zIndex = 10
    } else if (relativePosition === 0) {
      // Left phone - positioned to the left
      x = -250
      z = -80
      y = 30
      scale = 0.9
      opacity = 0.8
      phoneRotationY = 25 // Rotate to face center
      zIndex = 5
    } else {
      // Right phone - positioned to the right
      x = 250
      z = -80
      y = 30
      scale = 0.9
      opacity = 0.8
      phoneRotationY = -25 // Rotate to face center
      zIndex = 5
    }

    return {
      width: { xs: 240, md: relativePosition === 1 ? 320 : 280 },
      height: { xs: 500, md: relativePosition === 1 ? 640 : 560 },
      borderRadius: '32px',
      border: '4px solid rgba(255,255,255,0.2)',
      bgcolor: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      position: 'absolute',
      left: '50%',
      top: '50%',
      overflow: 'hidden',
      boxShadow: relativePosition === 1
        ? '0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.2)' 
        : '0 20px 40px rgba(0,0,0,0.15)',
      transform: { 
        md: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${phoneRotationY}deg) scale(${scale})`
      },
      opacity,
      zIndex,
      transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
      transformStyle: 'preserve-3d',
      '&:hover': {
        transform: { 
          md: `translate(-50%, -50%) translate3d(${x}px, ${y - 15}px, ${z + 30}px) rotateY(${phoneRotationY}deg) scale(${scale * 1.05})`
        },
        opacity: Math.min(1, opacity * 1.15),
        boxShadow: relativePosition === 1
          ? '0 50px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.25)' 
          : '0 30px 60px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease-out'
      }
    }
  }, [centerPhone])

  return (
    <Box 
      ref={sectionRef}
      sx={{ py: 8, background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #90CAF9 100%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background decorative elements */}
      <Box sx={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }} />
      <Box sx={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)' }} />
      
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
              position: 'relative',
              width: '100%',
              height: { xs: '600px', md: '800px' },
              perspective: '1200px',
              perspectiveOrigin: 'center center',
              transformStyle: 'preserve-3d',
              overflow: 'visible'
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
                    setTimeout(() => setIsTransitioning(false), 1200)
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
                loading="lazy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '28px',
                  transition: 'opacity 0.3s ease',
                  opacity: imagesLoaded.has(index) ? 1 : 0
                }}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                  setImagesLoaded(prev => new Set([...prev, index]));
                }}
                onError={(e) => {
                  console.error(`Failed to load ${phone.image}:`, e);
                }}
              />
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

      {/* CSS for skeleton loading */}
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