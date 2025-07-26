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
  FloatingActionButton
} from './components'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', margin: 0, padding: 0, width: '100%' }}>
      <Navigation />
      <Toolbar />
      <div id="home"><HeroSection /></div>
      <div id="features"><FeaturesSection /></div>
      <div id="showcase"><BankingShowcase /></div>
      <div id="notes"><NoteDetailSection /></div>
      <div id="security"><SecuritySection /></div>
      <div id="backup"><BackupSection /></div>
      <FloatingActionButton />
      <FooterSection />
    </Box>
  )
}

export default App