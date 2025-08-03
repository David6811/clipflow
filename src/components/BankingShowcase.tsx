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

const BankingShowcase: React.FC = React.memo(() => {
  const [centerPhone, setCenterPhone] = useState<number>(0) // 0: Phone1, 1: Phone2, 2: Phone3
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(true)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0) // 0: 1.png, 1: 2.png, 2: 3.png
  const [imageRotationActive, setImageRotationActive] = useState<boolean>(false)
  const [videoCompleted, setVideoCompleted] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Optimized Intersection Observer with lazy image loading
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Load only the first image immediately, others on demand
            const img = new Image()
            img.src = availableImages[0]
            img.loading = 'eager'
            img.fetchPriority = 'high'
            img.onload = () => setImagesLoaded(prev => new Set([...prev, 0]))
            
            // Preload other images with lower priority after a delay
            setTimeout(() => {
              availableImages.slice(1).forEach((imageSrc, index) => {
                const img = new Image()
                img.src = imageSrc
                img.loading = 'lazy'
                img.fetchPriority = 'low'
                img.onload = () => setImagesLoaded(prev => new Set([...prev, index + 1]))
              })
            }, 500)
          }
        }, 50) // Reduced debounce time
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' // Further reduced margin
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Video autoplay when in center position
  useEffect(() => {
    const video = videoRef.current
    if (!video || !isVisible) return

    // Check if video phone is in center position
    const videoPhoneIndex = 1 // Phone 2 has video
    const isVideoInCenter = centerPhone === videoPhoneIndex

    if (isVideoInCenter) {
      video.currentTime = 0 // Reset to beginning
      video.play().catch(console.error)
    } else {
      video.pause()
    }
  }, [isVisible, centerPhone])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [])

  // Modified sequence to wait for video completion
  useEffect(() => {
    if (!autoPlay || !isVisible) return

    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout  
    let timeout3: NodeJS.Timeout
    let timeout4: NodeJS.Timeout
    
    const runSequence = () => {
      // Reset video completed state when starting new sequence
      setVideoCompleted(false)
      
      // Start with 1.png immediately
      setCurrentImageIndex(0)
      
      // Check if current center phone should show video (phone index 1)
      const shouldShowVideo = centerPhone === 1 // Phone index 1 shows video
      
      if (shouldShowVideo) {
        // For video phone, wait for video completion instead of fixed time
        const waitForVideo = () => {
          if (videoCompleted) {
            setIsTransitioning(true)
            setCenterPhone(prev => (prev + 1) % 3)
            
            timeout4 = setTimeout(() => {
              setIsTransitioning(false)
            }, 800)
          } else {
            // Check again in 100ms
            timeout3 = setTimeout(waitForVideo, 100)
          }
        }
        
        // Start waiting for video after a short delay
        timeout1 = setTimeout(waitForVideo, 500)
      } else {
        // For non-video phones, use original image sequence timing
        timeout1 = setTimeout(() => {
          if (!autoPlay) return
          setCurrentImageIndex(1)
          
          timeout2 = setTimeout(() => {
            if (!autoPlay) return
            setCurrentImageIndex(2)
            
            timeout3 = setTimeout(() => {
              if (!autoPlay) return
              setIsTransitioning(true)
              setCenterPhone(prev => (prev + 1) % 3)
              
              timeout4 = setTimeout(() => {
                setIsTransitioning(false)
              }, 800)
            }, 1500)
          }, 1500)
        }, 1500)
      }
    }
    
    // Start the sequence immediately
    runSequence()
    
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearTimeout(timeout4)
    }
  }, [autoPlay, isVisible, centerPhone, videoCompleted])

  // Available images for rotation
  const availableImages = [
    '/1.png',
    '/2.png', 
    '/3.png'
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

  // Optimized phone styles with reduced calculation frequency
  const phoneStyles = useMemo(() => {
    const styles = []
    for (let phoneIndex = 0; phoneIndex < 3; phoneIndex++) {
      const relativePosition = (phoneIndex - centerPhone + 3) % 3 // 0=left, 1=center, 2=right
      
      let x = 0, z = 0, y = 0, scale = 1, opacity = 1, phoneRotationY = 0, zIndex = 2
      
      if (relativePosition === 1) {
        x = 0; z = 0; y = 0; scale = 1; opacity = 1; phoneRotationY = 0; zIndex = 10
      } else if (relativePosition === 0) {
        x = -350; z = -50; y = 40; scale = 0.9; opacity = 0.8; phoneRotationY = 20; zIndex = 5
      } else {
        x = 350; z = -50; y = 40; scale = 0.9; opacity = 0.8; phoneRotationY = -20; zIndex = 5
      }

      styles[phoneIndex] = {
        width: { xs: 240, md: relativePosition === 1 ? 320 : 280 },
        height: { xs: 500, md: relativePosition === 1 ? 640 : 560 },
        borderRadius: '32px',
        border: '4px solid rgba(255,255,255,0.2)',
        bgcolor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(6px)', // Reduced blur
        position: 'absolute',
        left: '50%',
        top: '50%',
        overflow: 'hidden',
        willChange: 'transform', // Only transform changes
        backfaceVisibility: 'hidden',
        boxShadow: relativePosition === 1
          ? '0 25px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.2)'
          : '0 15px 30px rgba(0,0,0,0.12)',
        transform: { 
          xs: relativePosition === 1 
            ? 'translate3d(-50%, -50%, 0) translateY(35px)'
            : relativePosition === 0
              ? 'translate3d(-50%, -50%, 0) translate(-120px, 55px) scale(0.8)'
              : 'translate3d(-50%, -50%, 0) translate(120px, 55px) scale(0.8)',
          md: `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, ${z}px) rotateY(${phoneRotationY}deg) scale(${scale})`
        },
        opacity,
        zIndex,
        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)', // Smoother easing
        cursor: 'pointer',
        '&:hover': {
          transform: { 
            xs: relativePosition === 1 
              ? 'translate3d(-50%, -50%, 0) translateY(25px) scale(1.02)'
              : relativePosition === 0
                ? 'translate3d(-50%, -50%, 0) translate(-120px, 45px) scale(0.82)'
                : 'translate3d(-50%, -50%, 0) translate(120px, 45px) scale(0.82)',
            md: `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y - 10}px, ${z + 10}px) rotateY(${phoneRotationY}deg) scale(${scale * 1.02})`
          },
          boxShadow: relativePosition === 1
            ? '0 35px 70px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.25)'
            : '0 20px 40px rgba(0,0,0,0.15)',
          transition: 'all 0.2s ease-out'
        }
      }
    }
    return styles
  }, [centerPhone])

  const getPhoneStyle = (phoneIndex: number) => phoneStyles[phoneIndex]

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: 8, 
        background: 'linear-gradient(180deg, rgba(248,250,252,0.2) 0%, rgba(241,245,249,0.3) 100%)',
        position: 'relative', 
        overflow: 'hidden',
        containIntrinsicSize: '100vw 800px', // Performance hint
        willChange: 'auto' // Let browser optimize
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

        {/* Interactive Phone Carousel - 3D Restored */}
        {isVisible ? (
          <Box 
            sx={{ 
              position: 'relative',
              width: '100%',
              height: { xs: '550px', md: '700px' },
              perspective: '1000px', // Reduced perspective for better performance
              perspectiveOrigin: 'center 50%',
              transformStyle: 'preserve-3d',
              overflow: 'visible',
              contain: 'layout style paint', // Performance containment
              willChange: 'auto'
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
              {/* Show video only for center phone (relativePosition === 1) */}
              {(index - centerPhone + 3) % 3 === 1 ? (
                <Box sx={{ 
                  width: '100%', 
                  height: '100%', 
                  bgcolor: '#1a1a1a',
                  borderRadius: '28px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  px: '2px',
                  py: '8px'
                }}>
                  {/* Modern Phone Screen with Notch */}
                  <Box sx={{
                    flex: 1,
                    borderRadius: '44px',
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: '#000'
                  }}>
                    {/* Video Screen Area with Rounded Corners */}
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '44px',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '44px',
                        zIndex: 1,
                        pointerEvents: 'none'
                      }
                    }}>
                      <video
                        ref={videoRef}
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                        onEnded={() => setVideoCompleted(true)}
                        onLoadStart={() => setVideoCompleted(false)}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          backfaceVisibility: 'hidden',
                          clipPath: 'inset(0 round 44px)',
                          WebkitClipPath: 'inset(0 round 44px)'
                        }}
                      >
                        <source src="/capture-optimized.mp4" type="video/mp4" />
                        <source src="/capture.mp4" type="video/mp4" />
                      </video>
                    </Box>

                    {/* Dynamic Island / Notch */}
                    <Box sx={{
                      position: 'absolute',
                      top: '8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '120px',
                      height: '28px',
                      bgcolor: '#000',
                      borderRadius: '14px',
                      zIndex: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: '12px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      {/* Front Camera */}
                      <Box sx={{
                        width: '6px',
                        height: '6px',
                        bgcolor: '#333',
                        borderRadius: '50%'
                      }} />
                      {/* Speaker */}
                      <Box sx={{
                        width: '30px',
                        height: '2px',
                        bgcolor: '#333',
                        borderRadius: '1px'
                      }} />
                    </Box>

                    {/* Home Indicator */}
                    <Box sx={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '35px',
                      height: '3px',
                      bgcolor: 'rgba(255,255,255,0.6)',
                      borderRadius: '2px',
                      zIndex: 10
                    }} />
                  </Box>
                </Box>
              ) : (
                <Box
                  component="img"
                  src={getCurrentImage(index)}
                  alt={phone.alt}
                  loading="eager"
                  decoding="async"
                  fetchpriority={index === centerPhone ? "high" : "low"}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '28px',
                    transition: 'opacity 0.2s ease',
                    opacity: 1,
                    willChange: 'opacity',
                    backfaceVisibility: 'hidden'
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

      {/* Optimized CSS animations */}
      <style>
        {`
          /* Optimized performance animations */
          * {
            transform-style: flat;
          }
          
          @keyframes skeleton-pulse {
            0%, 100% { 
              opacity: 0.4;
            }
            50% { 
              opacity: 0.7;
            }
          }
          
          /* Reduced motion for better performance */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
          
          /* GPU optimized hints */
          .phone-container {
            will-change: transform;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            contain: layout style paint;
          }
        `}
      </style>
    </Box>
  )
})

export default BankingShowcase