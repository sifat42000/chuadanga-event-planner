/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowLeft, X, Maximize2 } from 'lucide-react';
import ContactSection from '../components/ContactSection';

export default function PackageGallery() {
  const { serviceId, packageId } = useParams();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const service = SERVICES.find(s => s.id === serviceId);
  const pkg = service?.packages.find(p => p.id === packageId);

  if (!service || !pkg) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={`/service/${serviceId}`} 
            className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 mb-8 font-bold transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Packages</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{pkg.name} Designs</h1>
              <p className="text-xl text-rose-600 font-bold">{service.title} • {pkg.priceRange}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pkg.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col"
              >
                <div 
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer mb-4"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`${pkg.name} Design ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
                <Link
                  to="/booking"
                  state={{ designImage: img, packageName: pkg.name, serviceName: service.title }}
                  className="w-full bg-rose-600 text-white py-3 rounded-2xl font-bold hover:bg-rose-700 transition-colors text-center shadow-lg shadow-rose-100"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-rose-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Selected Design"
              className="max-w-full max-h-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ContactSection />
    </div>
  );
}
