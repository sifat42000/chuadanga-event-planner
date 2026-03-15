/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, Facebook, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-rose-500 mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-gray-400 mb-6">
              Making your special moments unforgettable with professional decoration and event planning services.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="font-semibold text-white">Owner:</span>
              <span>{BUSINESS_INFO.owner}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-rose-500" />
                <div>
                  {BUSINESS_INFO.phones.map(phone => (
                    <div key={phone}>{phone}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-rose-500" />
                <span>{BUSINESS_INFO.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={20} className="text-rose-500" />
                <span>Chuadanga, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <a 
              href={BUSINESS_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-colors"
            >
              <Facebook size={20} />
              <span>Facebook Page</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
