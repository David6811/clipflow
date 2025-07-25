function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ClipFlow</h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">Smart Clipboard Management for Android</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl mb-4">📋 Clipboard Manager</h3>
              <p className="opacity-90">Access your entire clipboard history with ease</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl mb-4">🔍 OCR Technology</h3>
              <p className="opacity-90">Extract text from images instantly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl mb-4">📱 Offline Ready</h3>
              <p className="opacity-90">Works completely offline for privacy and speed</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App