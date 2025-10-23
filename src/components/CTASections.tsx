import React from 'react';

export function BuildBlogSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl p-12">
            <h3 className="text-3xl mb-4">Read our story</h3>
            <p className="text-gray-800 mb-8">
              Find out why thousands trust Certo to secure their mobile world.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
              About Us
            </button>
          </div>
          
          <div className="bg-white border-2 border-gray-900 rounded-3xl p-12">
            <h3 className="text-3xl mb-4">Help Center</h3>
            <p className="text-gray-600 mb-8">
              Help topics, getting started guides and FAQs.
            </p>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
              Visit Help Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpywareSection() {
  return (
    <section className="text-white py-20" style={{
    background: "linear-gradient(90deg, #2925CC 0%, #4B48E5 100%)"
  }}>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-8">
          Is someone spying on your phone?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
            Get Certo for iPhone
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-colors">
            Get Certo for Android
          </button>
        </div>
      </div>
    </section>
  );
}


