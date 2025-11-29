import { Suspense, lazy } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingFallback from './components/LoadingFallback';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm bg-black/20 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
