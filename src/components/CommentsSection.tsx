import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Typography,
  Container,
  Avatar,
  Rating,
  Card,
  CardContent
} from '@mui/material'
import {
  Star,
  StarBorder
} from '@mui/icons-material'

interface UserReview {
  id: string
  author: string
  avatar?: string
  content: string
  rating: number
  timestamp: string
  verified: boolean
}

const CommentsSection: React.FC = () => {
  const [reviews] = useState<UserReview[]>([
    {
      id: '1',
      author: 'Sarah Chen',
      content: 'ClipFlow has completely transformed my workflow! The OCR functionality is incredibly accurate, and the offline feature gives me peace of mind. The interface is clean and intuitive.',
      rating: 5,
      timestamp: 'January 15, 2024',
      verified: true
    },
    {
      id: '2',
      author: 'Michael Rodriguez',
      content: 'Finally found a clipboard manager that truly respects privacy! All data stays local on my device. The smart categorization feature is a game-changer for productivity.',
      rating: 5,
      timestamp: 'January 12, 2024',
      verified: true
    },
    {
      id: '3',
      author: 'Emma Thompson',
      content: 'As a designer, I copy tons of text and assets daily. ClipFlow\'s history feature saves me so much time - I never lose track of previously copied content anymore.',
      rating: 4,
      timestamp: 'January 10, 2024',
      verified: true
    },
    {
      id: '4',
      author: 'David Kim',
      content: 'Exceptional attention to detail from the developers! The app is lightweight yet feature-rich. OCR recognition works perfectly for both English and other languages.',
      rating: 5,
      timestamp: 'January 8, 2024',
      verified: true
    },
    {
      id: '5',
      author: 'Lisa Anderson',
      content: 'Love the simplicity and power of this app. No cloud sync means my sensitive data stays private. The quick access to clipboard history is brilliant.',
      rating: 5,
      timestamp: 'January 5, 2024',
      verified: true
    },
    {
      id: '6',
      author: 'James Wilson',
      content: 'Best clipboard manager I\'ve used! The automatic organization by content type is incredibly helpful. Makes multitasking so much more efficient.',
      rating: 4,
      timestamp: 'January 3, 2024',
      verified: true
    }
  ])

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Box 
      ref={sectionRef}
      component="section"
      sx={{ 
        py: { xs: 8, md: 12 },
        background: `
          linear-gradient(180deg, rgba(248,250,252,0.9) 0%, rgba(241,245,249,0.88) 25%, rgba(226,232,240,0.85) 50%, rgba(203,213,225,0.82) 75%, rgba(191,201,215,0.85) 100%),
          radial-gradient(ellipse at 20% 30%, rgba(71, 85, 105, 0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 70%, rgba(71, 85, 105, 0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 90%, rgba(71, 85, 105, 0.04) 0%, transparent 50%)
        `,
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(226, 232, 240, 0.6)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.6)'
      }}
    >
      {/* Professional Geometric Background Elements */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '-50px', 
          left: '-50px', 
          width: '260px', 
          height: '180px', 
          borderRadius: '18px', 
          background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.08) 0%, rgba(71, 85, 105, 0.04) 100%)',
          transform: 'rotate(-8deg)',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(255,255,255,0.2)',
          animation: 'float 6s ease-in-out infinite'
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: '-70px', 
          right: '-70px', 
          width: '340px', 
          height: '220px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.06) 0%, rgba(71, 85, 105, 0.04) 100%)',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255,255,255,0.15)',
          animation: 'float 8s ease-in-out infinite reverse'
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '15%', 
          width: '90px', 
          height: '90px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(71, 85, 105, 0.08) 0%, transparent 70%)',
          backdropFilter: 'blur(1px)',
          animation: 'pulse 4s ease-in-out infinite'
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.2rem', md: '3rem' },
              color: 'text.primary',
              mb: 2,
              letterSpacing: '-0.02em'
            }}
          >
            What Users Say
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '600px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            Real experiences from ClipFlow users worldwide
          </Typography>
        </Box>

        {/* Reviews Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: 4,
            maxWidth: '1000px',
            mx: 'auto'
          }}
        >
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                animation: isVisible ? `slideInUp 0.6s ease-out ${index * 0.15}s both` : 'none',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.98)'
                }
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Review Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      mr: 2,
                      bgcolor: 'primary.main',
                      fontWeight: 600
                    }}
                  >
                    {review.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 0.5
                      }}
                    >
                      {review.author}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Rating 
                        value={review.rating} 
                        readOnly 
                        size="small"
                        sx={{ color: '#FFD600' }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: 'text.secondary', ml: 1 }}
                      >
                        {review.timestamp}
                      </Typography>
                    </Box>
                  </Box>
                  {review.verified && (
                    <Box
                      sx={{
                        bgcolor: 'success.main',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      Verified
                    </Box>
                  )}
                </Box>

                {/* Review Content */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    lineHeight: 1.7,
                    fontSize: '1rem'
                  }}
                >
                  {review.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(-8deg);
            }
            50% { 
              transform: translateY(-10px) rotate(-8deg);
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

export default CommentsSection