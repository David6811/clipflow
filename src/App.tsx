import { Box } from '@mui/material'

// Import components
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  BankingShowcase,
  ArchitectureSection,
  SecuritySection,
  FloatingActionButton
} from './components'

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <BankingShowcase />
      <ArchitectureSection />
      <FloatingActionButton />
    </Box>
  )
}

export default App