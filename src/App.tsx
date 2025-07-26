import { Box, Toolbar } from '@mui/material'

// Import components
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  BankingShowcase,
  ArchitectureSection,
  SecuritySection,
  BackupSection,
  NoteDetailSection,
  FloatingActionButton
} from './components'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', margin: 0, padding: 0, width: '100%' }}>
      <Navigation />
      <Toolbar />
      <HeroSection />
      <FeaturesSection />
      <NoteDetailSection />
      <SecuritySection />
      <BackupSection />
      <BankingShowcase />
      <ArchitectureSection />
      <FloatingActionButton />
      <FooterSection />
    </Box>
  )
}

export default App