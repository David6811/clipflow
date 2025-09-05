import { Box, Container, Typography, Button, Paper } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

interface PrivacyPolicyProps {
  onBack?: () => void
}

const PrivacyPolicy = ({ onBack }: PrivacyPolicyProps) => {
  const navigate = useNavigate()
  
  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate('/')
    }
  }
  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 4,
      background: `
        linear-gradient(180deg, 
          #ffffff 0%, 
          #fcfcfd 25%, 
          #f8fafc 50%, 
          #f1f5f9 75%, 
          #e8f0f7 100%
        )
      `
    }}>
      <Container maxWidth="md">
        <Button 
          startIcon={<ArrowBack />}
          onClick={handleBack}
          sx={{ 
            mb: 3,
            color: '#1E293B',
            '&:hover': {
              backgroundColor: 'rgba(30, 41, 59, 0.08)'
            }
          }}
        >
          Back to App
        </Button>
        
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 4 },
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(30, 41, 59, 0.08)'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              mb: 3,
              fontWeight: 700,
              color: '#1E293B',
              textAlign: 'center'
            }}
          >
            Privacy Policy
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Typography>

          <Box sx={{ '& > *': { mb: 3 } }}>
            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                1. Introduction
              </Typography>
              <Typography variant="body1" paragraph>
                ClipFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our 
                clipboard management application.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                2. Information We Collect
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Clipboard Data:</strong> ClipFlow accesses and stores your clipboard content locally on your device 
                to provide clipboard management functionality. This includes text, images, and other copied content.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Device Information:</strong> We may collect device-specific information such as your device model, 
                operating system version, and app version for troubleshooting and optimization purposes.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Usage Analytics:</strong> We collect anonymous usage statistics to improve the app&apos;s performance 
                and user experience. This data is aggregated and does not identify individual users.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                3. How We Use Your Information
              </Typography>
              <Typography variant="body1" paragraph>
                Your clipboard data is processed entirely on your device and is used solely to:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <Typography component="li" variant="body1" paragraph>
                  Provide clipboard history and management features
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  Enable text recognition (OCR) functionality
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  Facilitate backup and sync features (when enabled)
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  Improve app performance and user experience
                </Typography>
              </Box>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                4. Data Storage and Security
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Local Storage:</strong> All clipboard data is stored locally on your device using secure storage mechanisms 
                provided by the Android operating system.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Encryption:</strong> Sensitive data is encrypted using industry-standard encryption methods to protect 
                your information from unauthorized access.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>No Cloud Storage:</strong> By default, your clipboard data is not transmitted to or stored on our servers. 
                Cloud backup features, if used, are optional and encrypted.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                5. Data Sharing and Third Parties
              </Typography>
              <Typography variant="body1" paragraph>
                We do not sell, trade, or otherwise transfer your clipboard content to third parties. We may share 
                anonymized, aggregated usage data with analytics services to improve our app, but this data cannot 
                be used to identify individual users.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                6. Permissions
              </Typography>
              <Typography variant="body1" paragraph>
                ClipFlow requires the following permissions to function properly:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Clipboard Access:</strong> To read and manage clipboard content
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Storage:</strong> To save clipboard history locally on your device
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Network (Optional):</strong> For cloud backup features and updates
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Camera (Optional):</strong> For OCR functionality when scanning text from images
                </Typography>
              </Box>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                7. Children's Privacy
              </Typography>
              <Typography variant="body1" paragraph>
                ClipFlow is not intended for use by children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If we become aware that a child under 13 has provided 
                us with personal information, we will delete such information immediately.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                8. Your Rights and Controls
              </Typography>
              <Typography variant="body1" paragraph>
                You have the right to:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <Typography component="li" variant="body1" paragraph>
                  Delete your clipboard history at any time through the app settings
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  Disable specific features like cloud backup or analytics
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  Uninstall the app to remove all locally stored data
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  Request information about data processing by contacting us
                </Typography>
              </Box>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                9. Changes to This Privacy Policy
              </Typography>
              <Typography variant="body1" paragraph>
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new privacy policy in the app and updating the &quot;Last updated&quot; date. Your continued use of 
                ClipFlow after such modifications constitutes acceptance of the updated policy.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, color: '#1E293B' }}>
                10. Contact Us
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </Typography>
              <Box sx={{ 
                p: 2, 
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(59, 130, 246, 0.1)'
              }}>
                <Typography variant="body1">
                  Email: privacy@clipflow.app<br/>
                  Subject: Privacy Policy Inquiry
                </Typography>
              </Box>
            </section>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default PrivacyPolicy