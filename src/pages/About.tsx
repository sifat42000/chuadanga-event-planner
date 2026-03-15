/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import ContactSection from '../components/ContactSection';
import { Award, Users, Sparkles, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            About {BUSINESS_INFO.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We are dedicated to making your special moments unforgettable with professional decoration and event planning services.
          </motion.p>
        </div>
      </section>

      {/* Business Info & Owner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story & Leadership</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {BUSINESS_INFO.name} was founded with a vision to bring world-class event decoration to Chuadanga. Under the expert leadership of <strong>{BUSINESS_INFO.owner}</strong>, we have grown into a trusted name for event management.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With years of experience in the industry, we understand that every event is unique. Our team works tirelessly to ensure that every detail reflects your personal style and exceeds your expectations.
              </p>
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <p className="text-rose-900 font-semibold italic">
                  "Our mission is to provide high-quality, creative, and affordable decoration services that turn every celebration into a masterpiece."
                </p>
                <p className="mt-4 text-gray-900 font-bold">— {BUSINESS_INFO.owner}, Owner</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://i.ibb.co.com/SbHfNrc/23849-jpg.jpg"
                alt="Event Management"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Types of Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have handled hundreds of events, ranging from intimate gatherings to grand celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-rose-600" />, title: "5+ Years", desc: "Of professional experience" },
              { icon: <Users className="text-rose-600" />, title: "500+", desc: "Happy clients served" },
              { icon: <Sparkles className="text-rose-600" />, title: "Creative", desc: "Unique & modern designs" },
              { icon: <ShieldCheck className="text-rose-600" />, title: "Reliable", desc: "On-time delivery guaranteed" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decoration Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img
                src="https://i.ibb.co.com/kgmycHry/22424-jpg.jpg"
                alt="Decoration Style"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Decoration Style</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in a variety of decoration styles, from traditional Bengali wedding setups to modern, minimalist designs. Our use of high-quality flowers, premium fabrics, and sophisticated lighting ensures a magical atmosphere.
              </p>
              <ul className="space-y-4">
                {[
                  "Traditional & Cultural Setups",
                  "Modern & Minimalist Designs",
                  "Luxury Royal Decorations",
                  "Themed Birthday Parties",
                  "Elegant Corporate Events"
                ].map((style, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-2 h-2 bg-rose-600 rounded-full" />
                    <span className="font-medium">{style}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose {BUSINESS_INFO.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Attention to Detail</h3>
              <p className="text-rose-200">We believe that small details make a big difference. Every flower and light is placed with care.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Affordable Luxury</h3>
              <p className="text-rose-200">Get premium decoration designs that fit your budget. We offer packages for everyone.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>
              <p className="text-rose-200">Our job isn't done until you are happy. We work closely with you to bring your vision to life.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
