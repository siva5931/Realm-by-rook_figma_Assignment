import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

const features = [
  {
    image: img1,
    title: "Spyware detection",
    description: "Our advanced spyware detection engine can identify if a device contains spyware or bugging software."
  },
  {
    image: img2,
    title: "Keylogger detection",
    description: "Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords)."
  },
  {
    image: img3,
    title: "Find tracking apps",
    description: "Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed."
  },
  {
    image: img4,
    title: "OS integrity check",
    description: "Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking."
  },
  {
    image: img5,
    title: "Threat removal",
    description: "Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions."
  },
  {
    image: img6,
    title: "Easy to use",
    description: "Apps that can check your device for vulnerabilities in a matter of minutes."
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            Get your freedom back, stop mobile spyware today
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl mb-4 font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold">
            Get Certo for iPhone
          </button>
          <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-semibold">
            Learn more at Certo
          </button>
        </div>
      </div>
    </section>
  );
}
