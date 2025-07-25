import { Box } from '@mui/material'

// Import components
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  MobileShowcase,
  BankingShowcase,
  FloatingActionButton
} from './components'

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <MobileShowcase />
      <BankingShowcase />
      <FloatingActionButton />
    </Box>
  )
}

export default App