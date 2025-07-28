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
      radius: 220,
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

            {/* Connection Lines with curve and elastic animation */}
            {noteActions.map((action, index) => {
              const angleRad = (action.angle * Math.PI) / 180
              const centerX = 300
              const centerY = 300
              const endX = centerX + Math.cos(angleRad) * action.radius
              const endY = centerY + Math.sin(angleRad) * action.radius
              
              // Create curved path for elastic feel
              const controlX = centerX + Math.cos(angleRad) * (action.radius * 0.7)
              const controlY = centerY + Math.sin(angleRad) * (action.radius * 0.7) - 20

              return (
                <path
                  key={`line-${index}`}
                  d={`M ${centerX} ${centerY} Q ${controlX} ${controlY} ${endX} ${endY}`}
                  stroke={action.color}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                  style={{
                    animation: isVisible ? `lineGrowElastic 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${action.delay} both` : 'none',
                    strokeDasharray: '400',
                    strokeDashoffset: isVisible ? '0' : '400'
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

          {/* Dynamic Text Display - Sticky Note Style */}
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
              // Active Action Sticky Note
              <Box
                sx={{
                  animation: 'textFadeIn 0.3s ease-out',
                  background: `linear-gradient(145deg, ${noteActions[activeAction].color}15 0%, ${noteActions[activeAction].color}25 100%)`,
                  borderRadius: '2px',
                  p: 2.5,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  border: `1px solid ${noteActions[activeAction].color}44`,
                  position: 'relative',
                  transform: 'rotate(-1deg)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer',
                  fontFamily: '"Kalam", cursive, "Inter", sans-serif',
                  '&:hover': {
                    transform: 'rotate(-1deg) scale(1.02)',
                    zIndex: 10
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-8px',
                    right: '20px',
                    width: '24px',
                    height: '16px',
                    background: 'linear-gradient(145deg, #ddd 0%, #bbb 100%)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: noteActions[activeAction].color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1.5,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    {React.createElement(noteActions[activeAction].icon, { 
                      sx: { fontSize: 18, color: 'white' } 
                    })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#2a2a2a',
                      fontFamily: '"Kalam", cursive, "Inter", sans-serif'
                    }}
                  >
                    {noteActions[activeAction].title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.85rem',
                    lineHeight: 1.4,
                    color: '#4a4a4a',
                    fontFamily: '"Kalam", cursive, "Inter", sans-serif'
                  }}
                >
                  {noteActions[activeAction].description}
                </Typography>
              </Box>
            ) : (
              // Default Note Sticky Note
              <Box
                sx={{
                  animation: 'textFadeIn 0.3s ease-out',
                  background: 'linear-gradient(145deg, #DAA52015 0%, #DAA52025 100%)',
                  borderRadius: '2px',
                  p: 2.5,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  border: '1px solid #DAA52044',
                  position: 'relative',
                  transform: 'rotate(1deg)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer',
                  fontFamily: '"Kalam", cursive, "Inter", sans-serif',
                  '&:hover': {
                    transform: 'rotate(1deg) scale(1.02)',
                    zIndex: 10
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-8px',
                    right: '20px',
                    width: '24px',
                    height: '16px',
                    background: 'linear-gradient(145deg, #ddd 0%, #bbb 100%)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#DAA520',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1.5,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    <StickyNote2 sx={{ fontSize: 18, color: 'white' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#2a2a2a',
                      fontFamily: '"Kalam", cursive, "Inter", sans-serif'
                    }}
                  >
                    Note
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.85rem',
                    lineHeight: 1.4,
                    color: '#4a4a4a',
                    fontFamily: '"Kalam", cursive, "Inter", sans-serif'
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

      {/* Add Google Fonts */}
      <Box
        component="link"
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Kalam:wght@300;400;700&display=swap"
        rel="stylesheet"
        sx={{ display: 'none' }}
      />

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
          @keyframes lineGrowElastic {
            0% { 
              stroke-dashoffset: 400;
              opacity: 0;
            }
            40% { 
              stroke-dashoffset: -50;
              opacity: 0.6;
            }
            70% { 
              stroke-dashoffset: 20;
              opacity: 0.7;
            }
            90% { 
              stroke-dashoffset: -10;
              opacity: 0.6;
            }
            100% { 
              stroke-dashoffset: 0;
              opacity: 0.5;
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