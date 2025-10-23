import React from 'react';
import { Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer 
  style={{ backgroundColor: '#02033B' }}
  className="text-white py-16"
>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl mb-6">Scan. Detect. Remove.</h3>
            <div className="flex gap-4 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Copyright 0 2022 Certo Software Limited I Registered in England & Wales No. 10072356
            Designed & developed by Bigger Picture.</p>
            <div className="mt-8 space-y-2">
              <p className="text-sm text-gray-400">Certo</p>
              <p className="text-sm text-gray-400">Menu</p>
              <p className="text-sm text-gray-400">Android</p>
              <p className="text-sm text-gray-400">Blog</p>
              <p className="text-sm text-gray-400">Careers</p>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8">
              <h4 className="text-2xl text-gray-900 mb-4">
                Sign up to our newsletter
              </h4>
              <p className="text-gray-800 mb-6">
                Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500"
                />
                <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-2xl p-6">
              <p className="text-gray-900 text-sm">
                © 2025 Certo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
