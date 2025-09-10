import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppRoutes from './routes';
import Loader from './components/Loader';
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Chatbot = lazy(() => import('./components/Chatbot'));
const BackgroundBeams = lazy(() => import('./components/BackgroundBeams'));
import { TracingBeam } from './components/ui/tracing-beam';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col relative overflow-hidden font-sans">
          <BackgroundBeams />
          {/* Tracing beam on the right side for app progress */}
          <div className="absolute top-0 right-0 h-full w-16 z-20 pointer-events-none">
            <TracingBeam className="h-full w-full"><div /></TracingBeam>
          </div>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar className="w-full" />
            <main className="flex-1">
              <AppRoutes />
            </main>
            <Footer />
            <Chatbot />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
