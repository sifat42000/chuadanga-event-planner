/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Phone, MessageCircle, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function ThankYou() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={64} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Booking Request!
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            We have received your request. We will contact you soon to confirm your event decoration and discuss further details.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="flex items-center justify-center space-x-2 bg-rose-600 text-white py-4 rounded-2xl font-bold hover:bg-rose-700 transition-all"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/88${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-500 hover:text-rose-600 font-bold transition-colors"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
