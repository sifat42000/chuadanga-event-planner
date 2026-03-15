/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planning an Event?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Let us decorate your special day. Contact us now for bookings and inquiries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={`https://wa.me/88${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <span className="font-bold text-gray-900 mb-1">WhatsApp</span>
              <span className="text-gray-500 text-sm">{BUSINESS_INFO.whatsapp}</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <span className="font-bold text-gray-900 mb-1">Call Now</span>
              <span className="text-gray-500 text-sm">{BUSINESS_INFO.phones[0]}</span>
            </a>

            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Facebook size={32} />
              </div>
              <span className="font-bold text-gray-900 mb-1">Facebook</span>
              <span className="text-gray-500 text-sm">Visit Our Page</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
