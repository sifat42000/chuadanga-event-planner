/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
