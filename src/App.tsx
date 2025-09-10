import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import AppRoutes from './routes';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BackgroundBeams from './components/BackgroundBeams';
import { TracingBeam } from './components/ui/tracing-beam';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Voltora Power Solutions E-Commerce</title>
        <meta name="description" content="Shop futuristic power solutions, solar panels, batteries, and smart home energy products at Voltora." />
        <meta name="keywords" content="power solutions, solar, batteries, smart home, e-commerce" />
        <meta property="og:title" content="Voltora Power Solutions E-Commerce" />
        <meta property="og:description" content="Shop futuristic power solutions, solar panels, batteries, and smart home energy products at Voltora." />
        <meta property="og:type" content="website" />
      </Helmet>
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
    </>
  );
}

export default App;
