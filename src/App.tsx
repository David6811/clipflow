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
            linear-gradient(180deg, 
              #ffffff 0%, 
              #fcfcfd 25%, 
              #f8fafc 50%, 
              #f1f5f9 75%, 
              #e8f0f7 100%
            )
          `
        }}
      />

      {/* Unified Background Shapes Layer */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        {/* Top Section Shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '8%',
            left: '5%',
            width: '320px',
            height: '240px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.06) 0%, rgba(59, 130, 246, 0.04) 100%)',
            borderRadius: '8px',
            transform: 'rotate(-12deg)',
            filter: 'blur(8px)',
            animation: 'organicFloat1 20s ease-in-out infinite'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            right: '8%',
            width: '280px',
            height: '160px',
            background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.05) 0%, rgba(168, 85, 247, 0.03) 100%)',
            borderRadius: '8px',
            transform: 'rotate(15deg)',
            filter: 'blur(12px)',
            animation: 'organicFloat2 25s ease-in-out infinite reverse'
          }}
        />
        
        {/* Mid Section Shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '35%',
            left: '15%',
            width: '200px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%)',
            borderRadius: '8px',
            transform: 'rotate(-25deg)',
            filter: 'blur(12px)',
            animation: 'organicFloat3 22s ease-in-out infinite'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            right: '12%',
            width: '350px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.06) 0%, rgba(236, 72, 153, 0.04) 100%)',
            borderRadius: '8px',
            transform: 'rotate(8deg)',
            filter: 'blur(15px)',
            animation: 'organicFloat4 18s ease-in-out infinite'
          }}
        />
        
        {/* Bottom Section Shapes */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '10%',
            width: '280px',
            height: '180px',
            background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.05) 0%, rgba(34, 197, 94, 0.03) 60%, transparent 100%)',
            borderRadius: '8px',
            filter: 'blur(20px)',
            animation: 'organicFloat5 16s ease-in-out infinite reverse'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '220px',
            height: '140px',
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.05) 0%, rgba(99, 102, 241, 0.03) 100%)',
            borderRadius: '8px',
            transform: 'rotate(-18deg)',
            filter: 'blur(10px)',
            animation: 'organicFloat6 24s ease-in-out infinite'
          }}
        />
        
        {/* Large Feature Shape - Center */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '40%',
            width: '400px',
            height: '300px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.03) 50%, rgba(236, 72, 153, 0.02) 100%)',
            borderRadius: '8px',
            transform: 'rotate(-5deg)',
            filter: 'blur(25px)',
            animation: 'organicFloat9 30s ease-in-out infinite',
            opacity: 0.8
          }}
        />
        
        {/* Additional Accent Shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            left: '70%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.04) 0%, transparent 70%)',
            borderRadius: '8px',
            filter: 'blur(15px)',
            animation: 'organicFloat7 20s ease-in-out infinite reverse'
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '45%',
            left: '5%',
            width: '180px',
            height: '100px',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.04) 0%, rgba(59, 130, 246, 0.02) 100%)',
            borderRadius: '8px',
            transform: 'rotate(12deg)',
            filter: 'blur(6px)',
            animation: 'organicFloat8 26s ease-in-out infinite'
          }}
        />
      </Box>

      <Navigation />
      <Toolbar />
      
      {/* Section with Professional Backgrounds and Smooth Transitions */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
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

          @keyframes gentleFloat {
            0%, 100% {
              transform: translateY(0px) scale(1);
            }
            50% {
              transform: translateY(-15px) scale(1.02);
            }
          }

          @keyframes organicFloat1 {
            0%, 100% {
              transform: translateY(0px) rotate(-12deg) scale(1);
              border-radius: 8px;
            }
            33% {
              transform: translateY(-15px) rotate(-8deg) scale(1.05);
              border-radius: 8px;
            }
            66% {
              transform: translateY(-8px) rotate(-15deg) scale(0.98);
              border-radius: 8px;
            }
          }

          @keyframes organicFloat2 {
            0%, 100% {
              transform: translateY(0px) rotate(15deg) scale(1);
            }
            50% {
              transform: translateY(-12px) rotate(12deg) scale(1.03);
            }
          }

          @keyframes organicFloat3 {
            0%, 100% {
              transform: translateY(0px) rotate(-25deg) scale(1);
            }
            50% {
              transform: translateY(-10px) rotate(-20deg) scale(1.02);
            }
          }

          @keyframes organicFloat4 {
            0%, 100% {
              transform: translateY(0px) rotate(8deg) scale(1);
              border-radius: 8px;
            }
            25% {
              transform: translateY(-8px) rotate(5deg) scale(1.02);
              border-radius: 8px;
            }
            75% {
              transform: translateY(-5px) rotate(12deg) scale(0.98);
              border-radius: 8px;
            }
          }

          @keyframes organicFloat5 {
            0%, 100% {
              transform: translateY(0px) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-12px) scale(1.02);
              opacity: 0.9;
            }
          }

          @keyframes organicFloat6 {
            0%, 100% {
              transform: translateY(0px) rotate(-18deg) scale(1);
            }
            50% {
              transform: translateY(-14px) rotate(-15deg) scale(1.03);
            }
          }

          @keyframes organicFloat7 {
            0%, 100% {
              transform: translateY(0px) scale(1);
            }
            33% {
              transform: translateY(-6px) scale(1.01);
            }
            66% {
              transform: translateY(-3px) scale(0.99);
            }
          }

          @keyframes organicFloat8 {
            0%, 100% {
              transform: translateY(0px) rotate(12deg) scale(1);
            }
            50% {
              transform: translateY(-8px) rotate(8deg) scale(1.01);
            }
          }

          @keyframes organicFloat9 {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg) scale(1);
              border-radius: 8px;
            }
            33% {
              transform: translateY(-10px) rotate(-2deg) scale(1.02);
              border-radius: 8px;
            }
            66% {
              transform: translateY(-15px) rotate(-8deg) scale(0.99);
              border-radius: 8px;
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