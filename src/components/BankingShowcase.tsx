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
  const [centerPhone, setCenterPhone] = useState<number>(0) // 0: Phone1, 1: Phone2, 2: Phone3
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(true)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0) // 0: 1.png, 1: 2.png, 2: 3.png
  const [imageRotationActive, setImageRotationActive] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Preload all available images when component becomes visible
          availableImages.forEach(imageSrc => {
            const img = new Image()
            img.src = imageSrc
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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [])

  // Simple image sequence: 1 -> 2 -> 3 -> switch phone
  useEffect(() => {
    if (!autoPlay || !isVisible) return

    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout  
    let timeout3: NodeJS.Timeout
    let timeout4: NodeJS.Timeout
    
    const runSequence = () => {
      // Start with 1.png immediately
      setCurrentImageIndex(0)
      
      // After 2 seconds, show 2.png
      timeout1 = setTimeout(() => {
        if (!autoPlay) return // Check if still auto-playing
        setCurrentImageIndex(1)
        
        // After another 2 seconds, show 3.png
        timeout2 = setTimeout(() => {
          if (!autoPlay) return // Check if still auto-playing
          setCurrentImageIndex(2)
          
          // After another 2 seconds, switch to next phone
          timeout3 = setTimeout(() => {
            if (!autoPlay) return // Check if still auto-playing
            setIsTransitioning(true)
            setCenterPhone(prev => (prev + 1) % 3)
            
            // After transition completes, reset transition state
            timeout4 = setTimeout(() => {
              setIsTransitioning(false)
            }, 1200)
          }, 2000)
        }, 2000)
      }, 2000)
    }
    
    // Start the sequence immediately
    runSequence()
    
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearTimeout(timeout4)
    }
  }, [autoPlay, isVisible, centerPhone])

  // Available images for rotation
  const availableImages = [
    '/clipflow/1.png',
    '/clipflow/2.png', 
    '/clipflow/3.png'
  ]

  // Phone configuration with dynamic images
  const phones = [
    {
      id: 0,
      name: 'Phone 1',
      alt: 'Clipflow App Interface - Screen 1'
    },
    {
      id: 1,
      name: 'Phone 2',
      alt: 'Clipflow App Interface - Screen 2'
    },
    {
      id: 2,
      name: 'Phone 3',
      alt: 'Clipflow App Interface - Screen 3'
    }
  ]

  // Get current image for a phone - center phone shows rotating images, others show static
  const getCurrentImage = (phoneIndex: number) => {
    const relativePosition = (phoneIndex - centerPhone + 3) % 3
    if (relativePosition === 1) { // This phone is in center position
      return availableImages[currentImageIndex]
    }
    // Non-center phones show static images: left shows 1.png, right shows 3.png
    return relativePosition === 0 ? availableImages[0] : availableImages[2]
  }

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
      x = -350 // Desktop spacing
      z = -120
      y = 40
      scale = 0.9
      opacity = 0.8
      phoneRotationY = 35 // Rotate to face center
      zIndex = 5
    } else {
      // Right phone - positioned to the right
      x = 350 // Desktop spacing
      z = -120
      y = 40
      scale = 0.9
      opacity = 0.8
      phoneRotationY = -35 // Rotate to face center
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
        xs: relativePosition === 1 
          ? 'translate(-50%, -50%) translate3d(0px, 35px, 0px) rotateY(0deg) scale(1)'
          : relativePosition === 0
            ? 'translate(-50%, -50%) translate3d(-120px, 55px, -60px) rotateY(25deg) scale(0.8)'
            : 'translate(-50%, -50%) translate3d(120px, 55px, -60px) rotateY(-25deg) scale(0.8)',
        md: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${phoneRotationY}deg) scale(${scale})`
      },
      opacity,
      zIndex,
      transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
      transformStyle: 'preserve-3d',
      '&:hover': {
        transform: { 
          xs: relativePosition === 1 
            ? 'translate(-50%, -50%) translate3d(0px, 20px, 0px) rotateY(0deg) scale(1.05)'
            : relativePosition === 0
              ? 'translate(-50%, -50%) translate3d(-120px, 40px, -30px) rotateY(25deg) scale(0.85)'
              : 'translate(-50%, -50%) translate3d(120px, 40px, -30px) rotateY(-25deg) scale(0.85)',
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
      sx={{ 
        py: 8, 
        background: 'linear-gradient(180deg, rgba(248,250,252,0.2) 0%, rgba(241,245,249,0.3) 100%)',
        position: 'relative', 
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '2.2rem', md: '3rem' }, 
              color: '#1E293B',
              letterSpacing: '-0.02em',
              mb: 2
            }}
          >
            ClipFlow in Action
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto', 
              fontWeight: 400, 
              color: 'text.secondary',
              opacity: 0.8,
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            Experience seamless clipboard management with our intuitive mobile interface
          </Typography>
        </Box>

        {/* Interactive Phone Carousel */}
        {isVisible ? (
          <Box 
            sx={{ 
              position: 'relative',
              width: '100%',
              height: { xs: '550px', md: '700px' },
              perspective: '1200px',
              perspectiveOrigin: 'center 40%',
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
                  setCenterPhone(index) // This will trigger the useEffect to restart cycle
                  
                  // Clear existing timeout
                  if (autoPlayTimeoutRef.current) {
                    clearTimeout(autoPlayTimeoutRef.current)
                  }
                  
                  // Resume auto-play after 10 seconds of user inactivity
                  autoPlayTimeoutRef.current = setTimeout(() => {
                    setAutoPlay(true)
                    setIsTransitioning(false)
                  }, 10000)
                }
              }}
            >
              <Box
                component="img"
                src={getCurrentImage(index)}
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
                  console.error(`Failed to load ${getCurrentImage(index)}:`, e);
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
                  width: { xs: 240, md: item === 1 ? 320 : 280 },
                  height: { xs: 500, md: item === 1 ? 640 : 560 },
                  borderRadius: '40px',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  animation: 'skeleton-pulse 1.5s ease-in-out infinite'
                }}
              />
            ))}
          </Box>
        )}
      </Container>

      {/* CSS for skeleton loading and floating animations */}
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
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(-15deg);
            }
            50% { 
              transform: translateY(-20px) rotate(-15deg);
            }
          }
          
          @keyframes pulse {
            0%, 100% { 
              opacity: 0.6;
              transform: scale(1);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default BankingShowcase