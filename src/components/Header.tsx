import React from 'react';
import { Menu } from 'lucide-react';
import logoImg from '../assets/logo.png';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Image */}
          <div>
            <img 
              src={logoImg}
              alt="Certo Logo"
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Menu</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Android</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Careers</a>
            <button 
  className="text-white px-6 py-2 rounded-full transition-colors font-semibold"
  style={{ 
    backgroundColor: '#4335DE'
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#3a2acc'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#4335DE'}
>
  Join
</button>

          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}


