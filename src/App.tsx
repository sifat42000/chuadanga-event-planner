/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouteLoader from './components/RouteLoader';
import usePageTracking from './hooks/usePageTracking';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const PackageGallery = lazy(() => import('./pages/PackageGallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BookingForm = lazy(() => import('./pages/BookingForm'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

// Handle scroll restoration on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function AppContent() {
  // Auto-track PageView on route changes
  usePageTracking();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <Home />
                </Suspense>
              } 
            />
            <Route 
              path="/services" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <Services />
                </Suspense>
              } 
            />
            <Route 
              path="/service/:serviceId" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <ServiceDetail />
                </Suspense>
              } 
            />
            <Route 
              path="/service/:serviceId/package/:packageId" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <PackageGallery />
                </Suspense>
              } 
            />
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <About />
                </Suspense>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <Contact />
                </Suspense>
              } 
            />
            <Route 
              path="/booking" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <BookingForm />
                </Suspense>
              } 
            />
            <Route 
              path="/thank-you" 
              element={
                <Suspense fallback={<RouteLoader />}>
                  <ThankYou />
                </Suspense>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

