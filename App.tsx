import React, { Suspense } from 'react';
import Scene3D from './components/Scene3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-indigo-400 font-mono animate-pulse">Chargement 3D...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="relative w-full min-h-screen text-white selection:bg-indigo-500/30">
      <Suspense fallback={<LoadingScreen />}>
        {/* Background 3D Scene */}
        <div className="fixed inset-0 z-0">
          <Scene3D />
        </div>

        {/* Content Layers */}
        <div className="relative z-10 flex flex-col">
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <footer className="py-8 bg-black/80 backdrop-blur-md border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Portfolio Vitrine. Fait avec React, Tailwind & Three.js.</p>
          </footer>
        </div>
      </Suspense>
    </div>
  );
}

export default App;