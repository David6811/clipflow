import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Typography,
  Container
} from '@mui/material'
import {
  StickyNote2,
  Favorite,
  LocalOffer,
  Folder,
  Image,
  Share,
  Lock
} from '@mui/icons-material'

const NoteDetailSection: React.FC = () => {
  const [activeAction, setActiveAction] = useState<number | null>(-1) // -1 for central note
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const noteActions = [
    {
      icon: Favorite,
      title: 'Toggle Favorite',
      description: 'Mark important notes as favorites for quick access',
      color: '#E91E63',
      angle: 0, // Top
      radius: 220,
      size: 110,
      delay: '0s'
    },
    {
      icon: LocalOffer,
      title: 'Add Tag',
      description: 'Organize notes with custom tags and categories',
      color: '#1976D2',
      angle: 60, // Top Right
      radius: 170,
      size: 85,
      delay: '0.2s'
    },
    {
      icon: Folder,
      title: 'Move to Folder',
      description: 'Organize notes into custom folders and collections',
      color: '#2196F3',
      angle: 120, // Right
      radius: 200,
      size: 100,
      delay: '0.4s'
    },
    {
      icon: Image,
      title: 'Convert to Image',
      description: 'Transform text notes into shareable image format',
      color: '#4CAF50',
      angle: 180, // Bottom
      radius: 210,
      size: 105,
      delay: '0.6s'
    },
    {
      icon: Share,
      title: 'Share Note',
      description: 'Share notes via messaging, email, or social platforms',
      color: '#9C27B0',
      angle: 240, // Bottom Left
      radius: 160,
      size: 80,
      delay: '0.8s'
    },
    {
      icon: Lock,
      title: 'Lock Note',
      description: 'Secure sensitive notes with password protection',
      color: '#F44336',
      angle: 300, // Left
      radius: 190,
      size: 95,
      delay: '1s'
    }
  ]

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: { xs: 6, md: 8 }, 
        background: 'linear-gradient(180deg, #d4c9bb 0%, rgba(212, 201, 187, 0.98) 20%, rgba(208, 195, 180, 0.95) 40%, rgba(200, 185, 170, 0.92) 60%, rgba(195, 180, 165, 0.95) 80%, #c8b5a0 100%)',
        color: 'text.primary',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.2rem', md: '3rem' },
              color: 'text.primary',
              letterSpacing: '-0.02em',
              mb: 2
            }}
          >
            Note Detail
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
            Every note comes with powerful tools. Organize, secure, and share your clipboard data exactly how you want.
          </Typography>
        </Box>

        {/* SVG-Based Center Emit Design with Dynamic Text */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 2, md: 4 },
            minHeight: { xs: '600px', md: '600px' },
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            py: { xs: 2, md: 0 }
          }}
        >
          {/* SVG Container with transparent background */}
          <Box
            sx={{
              position: 'relative',
              background: 'transparent',
              borderRadius: 3,
              p: 1
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 600 600"
              sx={{
                width: { xs: '400px', md: '500px' },
                height: { xs: '400px', md: '500px' },
                animation: isVisible ? 'svgFadeIn 1s ease-out' : 'none',
                background: 'transparent'
              }}
            >
            {/* Background Glow */}
            <defs>
              <radialGradient id="backgroundGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(218, 165, 32, 0.1)" />
                <stop offset="70%" stopColor="rgba(218, 165, 32, 0.05)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle
              cx="250"
              cy="250"
              r="200"
              fill="url(#backgroundGlow)"
              style={{ animation: isVisible ? 'backgroundPulse 4s ease-in-out infinite' : 'none' }}
            />

            {/* Connection Lines */}
            {noteActions.map((action, index) => {
              const angleRad = (action.angle * Math.PI) / 180
              const centerX = 300
              const centerY = 300
              const endX = centerX + Math.cos(angleRad) * action.radius
              const endY = centerY + Math.sin(angleRad) * action.radius

              return (
                <line
                  key={`line-${index}`}
                  x1={centerX}
                  y1={centerY}
                  x2={endX}
                  y2={endY}
                  stroke={action.color}
                  strokeWidth="2"
                  opacity="0.4"
                  style={{
                    animation: isVisible ? `lineGrow 1s ease-out ${action.delay} both` : 'none',
                    strokeDasharray: '200',
                    strokeDashoffset: isVisible ? '0' : '200'
                  }}
                />
              )
            })}

            <defs>
              <linearGradient id="noteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF8DC" />
                <stop offset="100%" stopColor="#F0E68C" />
              </linearGradient>
            </defs>

            {/* Central Note */}
            <circle
              cx="300"
              cy="300"
              r="50"
              fill="url(#noteGradient)"
              stroke="#DAA520"
              strokeWidth="3"
              style={{ animation: isVisible ? 'noteFloat 3s ease-in-out infinite' : 'none' }}
            />

            {/* Central Note Icon and Text */}
            <foreignObject x="250" y="250" width="100" height="100">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '50%',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
                onMouseEnter={() => setActiveAction(-1)}
                onMouseLeave={() => setActiveAction(-1)}
              >
                <StickyNote2 sx={{ fontSize: 28, color: '#DAA520', mb: 0.5 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    color: '#8B4513',
                    fontSize: '0.7rem',
                    textAlign: 'center'
                  }}
                >
                  Note
                </Typography>
              </Box>
            </foreignObject>

            {/* Action Buttons */}
            {noteActions.map((action, index) => {
              const angleRad = (action.angle * Math.PI) / 180
              const centerX = 300
              const centerY = 300
              const x = centerX + Math.cos(angleRad) * action.radius
              const y = centerY + Math.sin(angleRad) * action.radius
              const buttonSize = action.size

              return (
                <foreignObject
                  key={index}
                  x={x - buttonSize / 2}
                  y={y - buttonSize / 2}
                  width={buttonSize}
                  height={buttonSize}
                  style={{
                    animation: isVisible ? `actionFadeIn 0.8s ease-out ${action.delay} both` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.08)'
                      }
                    }}
                    onMouseEnter={() => setActiveAction(index)}
                    onMouseLeave={() => setActiveAction(null)}
                  >
                    {/* Action Button */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(255, 255, 255, 0.98)',
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `3px solid ${action.color}`,
                        boxShadow: `0 6px 20px ${action.color}30, inset 0 1px 3px rgba(255,255,255,0.8)`
                      }}
                    >
                      <action.icon 
                        sx={{ 
                          fontSize: buttonSize * 0.3, 
                          color: action.color,
                          mb: 0.5,
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                        }} 
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 700,
                          color: action.color,
                          fontSize: `${buttonSize * 0.12}px`,
                          textAlign: 'center',
                          lineHeight: 1.2,
                          textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                          px: 0.5
                        }}
                      >
                        {action.title.split(' ').map((word, i) => (
                          <span key={i}>
                            {word}
                            {i < action.title.split(' ').length - 1 && <br />}
                          </span>
                        ))}
                      </Typography>
                    </Box>
                  </Box>
                </foreignObject>
              )
            })}
            </Box>
          </Box>

          {/* Dynamic Text Display */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '350px' },
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              px: { xs: 2, md: 3 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
{activeAction !== null && activeAction >= 0 ? (
              <Box
                sx={{
                  animation: 'textFadeIn 0.3s ease-out',
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  border: `2px solid ${noteActions[activeAction].color}`,
                  boxShadow: `0 8px 24px ${noteActions[activeAction].color}20`
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: noteActions[activeAction].color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1.5,
                      boxShadow: `0 4px 12px ${noteActions[activeAction].color}40`
                    }}
                  >
                    {React.createElement(noteActions[activeAction].icon, { 
                      sx: { fontSize: 20, color: 'white' } 
                    })}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {noteActions[activeAction].title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    lineHeight: 1.5
                  }}
                >
                  {noteActions[activeAction].description}
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  animation: 'textFadeIn 0.3s ease-out',
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid #DAA520',
                  boxShadow: '0 8px 24px rgba(218, 165, 32, 0.2)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: '#DAA520',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1.5,
                      boxShadow: '0 4px 12px rgba(218, 165, 32, 0.4)'
                    }}
                  >
                    <StickyNote2 sx={{ fontSize: 20, color: 'white' }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    Note
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    lineHeight: 1.5
                  }}
                >
                  Your captured text and OCR content. Each note can be organized, secured, and shared with powerful management tools.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Bottom Quote */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 4 } }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: { xs: '1rem', md: '1.125rem' },
              opacity: 0.8,
              px: { xs: 2, md: 0 }
            }}
          >
            &ldquo;Every note, perfectly organized and completely under your control&rdquo;
          </Typography>
        </Box>
      </Container>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes svgFadeIn {
            0% { 
              opacity: 0;
              transform: scale(0.9);
            }
            100% { 
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes noteFloat {
            0%, 100% { 
              transform: scale(1);
              filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
            }
            50% { 
              transform: scale(1.02);
              filter: drop-shadow(0 6px 12px rgba(0,0,0,0.15));
            }
          }
          @keyframes actionFadeIn {
            0% { 
              opacity: 0;
              transform: scale(0.3);
            }
            100% { 
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes lineGrow {
            0% { 
              stroke-dashoffset: 200;
              opacity: 0;
            }
            100% { 
              stroke-dashoffset: 0;
              opacity: 0.4;
            }
          }
          @keyframes backgroundPulse {
            0%, 100% { 
              opacity: 0.8;
              transform: scale(1);
            }
            50% { 
              opacity: 1;
              transform: scale(1.02);
            }
          }
          @keyframes textFadeIn {
            0% { 
              opacity: 0;
              transform: translateY(10px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default NoteDetailSection