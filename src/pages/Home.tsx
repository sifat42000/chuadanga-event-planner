/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO, PACKAGES } from '../constants';
import ContactSection from '../components/ContactSection';
import { trackEvent } from '../utils/pixel';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full object-cover pointer-events-none"
            src="https://www.youtube.com/embed/--O2muDxKgY?autoplay=1&mute=1&controls=0&loop=1&playlist=--O2muDxKgY&modestbranding=1&rel=0&showinfo=0"
            title="Hero Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Beautiful Event Decoration for Your Special Day
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Professional decoration services for weddings, engagements, birthdays, and special events in Chuadanga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <span>View Services</span>
                <ArrowRight size={20} />
              </Link>
              <a
                href={`https://wa.me/88${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('Contact', { method: 'WhatsApp' })}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Chuadanga Event Planner</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Chuadanga Event Planner provides professional decoration services for weddings, engagements, birthdays, and special events. With years of experience and a passion for creativity, we turn your vision into reality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Under the leadership of MD SHAHIN, our team is dedicated to delivering high-quality stage designs and event setups that exceed expectations.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 p-4 rounded-2xl">
                  <Phone className="text-rose-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Call for Bookings</p>
                  <p className="text-xl font-bold text-gray-900">{BUSINESS_INFO.phones[0]}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/Image/reception-stage/compressed_1510.jpg (1).jpeg"
                alt="Our Work"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-rose-600 text-white p-8 rounded-3xl shadow-xl hidden lg:block">
                <p className="text-4xl font-bold mb-1">100+</p>
                <p className="text-sm font-medium uppercase tracking-wider">Events Decorated</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of decoration services tailored to your specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/service/${service.id}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-bold text-white">
                        <span className="block">{service.title}</span>
                        {service.banglaTitle && (
                          <span className="block text-sm font-medium text-white/80">
                            {service.banglaTitle}
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-rose-600 font-bold hover:text-rose-700 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Event Packages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Event Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of event decoration packages tailored to your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-rose-600 font-semibold mb-4">{pkg.priceRange}</p>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <Link
                  to="/booking"
                  state={{ packageName: pkg.name }}
                  onClick={() => {
                    trackEvent('InitiateCheckout', {
                      content_name: pkg.name

                    });
                  }}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-semibold text-center block transition-colors"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
