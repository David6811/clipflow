import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="container">
          <h1>ClipFlow</h1>
          <p className="tagline">Smart Clipboard Management for Android</p>
          <div className="features-grid">
            <div className="feature">
              <h3>📋 Clipboard Manager</h3>
              <p>Access your entire clipboard history with ease</p>
            </div>
            <div className="feature">
              <h3>🔍 OCR Technology</h3>
              <p>Extract text from images instantly</p>
            </div>
            <div className="feature">
              <h3>📱 Offline Ready</h3>
              <p>Works completely offline for privacy and speed</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App