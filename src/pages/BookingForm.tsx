/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Send } from 'lucide-react';

const VALID_TRACKING_NUMBERS = new Set([
  'X7K9Q2', 'B5Z8T3', 'Q4M1X8', 'H2L9V6', 'N7C4Z1',
  'P9X2M5', 'D6T1K8', 'Y3Q7P2', 'F8R4X6', 'W2L5T9',
  'K6Z1P4', 'R9M3C7', 'V4X8A2', 'S7T3Z5', 'L2N6X9',
  'A5Q8M2', 'T1P7V3', 'Z4K9R1', 'C8Y2L5', 'P3M7K4',
  'N6A1X5', 'Q8L4P2', 'Y1T6K8', 'X5Z7A2', 'R4Q9T1',
  'M3X8Z5', 'L7C2K9', 'Z6P3X7', 'A9N4M2', 'K1T8L6',
  'P8Y3Q6', 'V2K7M9', 'X9L1R5', 'T4A7Z3', 'B7K3L9',
  'H8M4T2', 'F6Q1X9', 'J3P7N5', 'G4L9T6', 'U8M2P5',
  'E5X3Q7', 'O9K4T1', 'D3N8M5', 'W6P2A7', 'S9L5X1'
]);

export default function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { designImage, packageName, serviceName } = location.state || {};

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    value: ''
  });
  const [trackingNumber, setTrackingNumber] = React.useState('');
  const [trackingError, setTrackingError] = React.useState('');
  const [usedTrackingNumbers, setUsedTrackingNumbers] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    const stored = localStorage.getItem('usedTrackingNumbers');
    if (stored) {
      try {
        const parsed: string[] = JSON.parse(stored);
        setUsedTrackingNumbers(new Set(parsed));
      } catch {
        setUsedTrackingNumbers(new Set());
      }
    }
  }, []);

  const isTrackingValid = (value: string) => {
    const normalized = value.trim().toUpperCase();
    if (!VALID_TRACKING_NUMBERS.has(normalized)) {
      return { valid: false, error: 'Invalid Project Tracking Number' };
    }
    if (usedTrackingNumbers.has(normalized)) {
      return { valid: false, error: 'This tracking number has already been used' };
    }
    return { valid: true, error: '' };
  };

  const handleTrackingChange = (value: string) => {
    const normalized = value.trim().toUpperCase();
    setTrackingNumber(value);
    const { valid, error } = isTrackingValid(normalized);
    setTrackingError(valid ? '' : error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const normalized = trackingNumber.trim().toUpperCase();
    const validation = isTrackingValid(normalized);
    if (!validation.valid) {
      setTrackingError(validation.error);
      return;
    }

    const nextUsed = new Set(usedTrackingNumbers);
    nextUsed.add(normalized);
    setUsedTrackingNumbers(nextUsed);
    localStorage.setItem('usedTrackingNumbers', JSON.stringify(Array.from(nextUsed)));

    navigate('/thank-you');
  };
  

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 mb-8 font-bold transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Gallery</span>
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Info */}
          <div className="p-10 bg-rose-600 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">Complete Your Booking</h1>
              <p className="text-rose-100 mb-8">
                Fill out the form to request a booking for this decoration design. We will contact you shortly to confirm the details.
              </p>
              
              {designImage && (
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
                  <img src={designImage} alt="Selected Design" className="w-full aspect-video object-cover" />
                  <div className="p-4 bg-white/10 backdrop-blur-md">
                    <p className="font-bold">{packageName}</p>
                    <p className="text-xs text-rose-200">{serviceName}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-sm text-rose-200">
              <p>By clicking Purchase, you agree to our terms of service.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>

              {/* <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div> */}
              <div>
                <label htmlFor="Value" className="block text-sm font-semibold text-gray-700 mb-2">Ammount</label>
                <input
                  type="text"
                  id="Value"
                  required
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  placeholder="Enter your ammount"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="trackingNumber" className="block text-sm font-semibold text-gray-700 mb-2">Project Tracking Number</label>
                <input
                  type="text"
                  id="trackingNumber"
                  required
                  value={trackingNumber}
                  onChange={(e) => handleTrackingChange(e.target.value)}
                  placeholder="Enter tracking number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
                {trackingError && (
                  <p className="mt-2 text-sm text-red-600">{trackingError}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!isTrackingValid(trackingNumber.trim().toUpperCase()).valid}
                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center space-x-2 transition-all ${
                  isTrackingValid(trackingNumber.trim().toUpperCase()).valid
                    ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-rose-200'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                }`}
              >
                <span>Purchase</span>
                <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
