/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import usePageTracking from './hooks/usePageTracking';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import PackageGallery from './pages/PackageGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingForm from './pages/BookingForm';
import ThankYou from './pages/ThankYou';

// TypeScript কে fbq চিনতে বলছি
declare const fbq: (...args: any[]) => void;
function ScrollToTop() {
  const location = useLocation();
// old coad
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);


  useEffect(() => {
    // পেজ লোড/রাউট চেঞ্জে স্ক্রল টপে নিয়ে আসা
    window.scrollTo(0, 0);

    // শুধু হোম পেজে PageView fire হবে
    if (location.pathname === "/") {
      fbq('track', 'PageView');
      console.log("🏠 Home PageView fired");
    }
  }, [location.pathname]);


  return null;
}

function AppContent() {

  usePageTracking(); //call function

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/service/:serviceId/package/:packageId" element={<PackageGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/thank-you" element={<ThankYou />} />
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