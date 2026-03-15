/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import { Phone, MessageCircle, Facebook, Mail, MapPin, User } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions or ready to book? Reach out to us through any of the channels below.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Owner</p>
                    <p className="text-xl font-bold text-gray-900">{BUSINESS_INFO.owner}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Phone Numbers</p>
                    {BUSINESS_INFO.phones.map(phone => (
                      <p key={phone} className="text-xl font-bold text-gray-900">{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Email Address</p>
                    <p className="text-xl font-bold text-gray-900 break-words break-all max-w-full overflow-wrap-anywhere">{BUSINESS_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-xl font-bold text-gray-900">Chuadanga, Bangladesh</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 sm:p-10 rounded-[2.5rem] border border-gray-100"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0]}`}
                  className="flex items-center justify-between p-5 sm:p-6 bg-rose-600 text-white rounded-2xl hover:bg-rose-700 transition-all group"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone size={22} />
                    <span className="text-base sm:text-lg font-bold">Call Now</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </a>

                <a
                  href={`https://wa.me/88${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 sm:p-6 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all group"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <MessageCircle size={22} />
                    <span className="text-base sm:text-lg font-bold">WhatsApp Chat</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </a>

                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 sm:p-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all group"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Facebook size={22} />
                    <span className="text-base sm:text-lg font-bold">Facebook Page</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </a>
              </div>

              <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-200">
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Our office is open from <strong>9:00 AM to 9:00 PM</strong> daily. Feel free to visit us or call anytime!
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">Send a Message</h3>
                <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  />
                  <textarea
                    rows={5}
                    required
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="mx-auto w-full sm:w-auto px-10 py-3 rounded-2xl bg-rose-600 text-white font-bold text-base sm:text-lg hover:bg-rose-700 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="mt-10">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Location</h4>
                <div className="w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    title="Chuadanga Event Planner Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0824002684623!2d88.8580295!3d23.6451203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa6fd86566f8df%3A0x61a7a35225d03c0!2sChuadanga%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1710000000000"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
