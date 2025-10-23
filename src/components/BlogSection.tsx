import React from 'react';
import { ArrowRight } from 'lucide-react';
import camera from '../assets/camera.png';
import girlcall from '../assets/girlcall.png';
import samsung from '../assets/samsung.png';
const blogPosts = [
  {
    image: girlcall,
    title: "Signs Your Ex Is Spying On You",
    description: "In an ideal world, after a relationship ends both you and your ex will move on. But what if they can't let go, and start spying on your...",
    link: "#"
  },
  {
    image: samsung,
    title: "How to Remove a Hacker from Your Samsung Phone",
    description: "Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apple's 28.43% as...",
    link: "#"
  },
  {
    image: camera,
    title: "Is Your Cell Phone Under Surveillance?",
    description: "In today's surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV...",
    link: "#"
  }
];

export function BlogSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          Latest Insights
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl mb-3 group-hover:text-purple-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a 
                href={post.link} 
                className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-2"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
            View all Insights
          </button>
        </div>
      </div>
    </section>
  );
}
