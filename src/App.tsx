import { Box, Toolbar } from '@mui/material'

// Import components
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  BankingShowcase,
  SecuritySection,
  BackupSection,
  NoteDetailSection,
  CommentsSection,
  FloatingActionButton
} from './components'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      margin: 0, 
      padding: 0, 
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Global Background System */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: `
            radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)
          `
        }}
      />

      {/* Floating Geometric Elements */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          pointerEvents: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.08)',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.08)',
            filter: 'blur(40px)',
            animation: 'float 8s ease-in-out infinite reverse'
          }
        }}
      />

      <Navigation />
      <Toolbar />
      
      {/* Section with Professional Backgrounds and Smooth Transitions */}
      <Box sx={{ 
        position: 'relative', 
        zIndex: 1,
        '& > div': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-1px',
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 10
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(to top, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 10
          }
        }
      }}>
        <div id="home" style={{ scrollBehavior: 'smooth' }}><HeroSection /></div>
        <div id="features" style={{ scrollBehavior: 'smooth' }}><FeaturesSection /></div>
        <div id="showcase" style={{ scrollBehavior: 'smooth' }}><BankingShowcase /></div>
        <div id="notes" style={{ scrollBehavior: 'smooth' }}><NoteDetailSection /></div>
        <div id="security" style={{ scrollBehavior: 'smooth' }}><SecuritySection /></div>
        <div id="backup" style={{ scrollBehavior: 'smooth' }}><BackupSection /></div>
        <div id="comments" style={{ scrollBehavior: 'smooth' }}><CommentsSection /></div>
      </Box>
      
      <FloatingActionButton />
      <FooterSection />

      {/* Global CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          /* Smooth scrolling for the entire page */
          html {
            scroll-behavior: smooth;
          }

          /* Section transition effects */
          section {
            position: relative;
            isolation: isolate;
          }

          section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
          }

          section:hover::before {
            opacity: 1;
          }
        `}
      </style>
    </Box>
  )
}

export default App