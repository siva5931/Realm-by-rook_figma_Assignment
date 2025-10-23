import React from "react";
import { Star } from "lucide-react";
import CNBC from '../assets/CNBC.png';
import NYP from '../assets/NYP.png';
import FT from '../assets/FT.png';
import Rd from '../assets/Rd.png';
import ZDNet from '../assets/ZDNet.png';
import Wired from '../assets/Wired.png';

const testimonials = [
  { rating: 5, text: "My son who works in IT suggested I try this app after I was getting lots of strange messages and things happening on my phone. Since running it once a week I have had no viruses or malware problems.", author: "Satisfied Customer", },
  { rating: 5, text: "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.", author: "colinandmandy94", },
  { rating: 5, text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus.", author: "Jennifer Black", },
  { rating: 5, text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.", author: "Phillip Colligan", },
  { rating: 5, text: "I wish they had a VPN, I’d be signing up for that too. Apart from that the app is top notch. I had Certo on my last phone and it was the first app I put on this phone.", author: "Leslie Carrillo", },
];

const featuredLogos = [
  { name: "CNBC", src: CNBC },
  { name: "NewYorkPost", src: NYP },
  { name: "FT", src: FT },
  { name: "RD", src: Rd },
  { name: "ZD", src: ZDNet },
  { name: "Wired", src: Wired },
];

const StarRating = ({ rating }) => (
  <div style={{ marginBottom: "9px", display: "flex", gap: 5 }}>
    {[...Array(rating)].map((_, i) => (
      <Star key={i} style={{ color: "#FFC247", fill: "#FFC247", width: 21, height: 21 }} />
    ))}
  </div>
);

const TestimonialCard = ({ text, author, rating }) => (
  <blockquote className="testimonials-card">
    <StarRating rating={rating} />
    <p className="testimonials-body">{text}</p>
    <div className="testimonials-author">{author}</div>
  </blockquote>
);

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
        .testimonials-section {
          width: 100vw;
          padding: 44px 0 66px 0;
          background: linear-gradient(180deg, #F7C95F 0%, #FDB235 100%);
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          overflow-x: hidden;
        }
        .testimonials-heading {
          text-align: left;
          margin: 0 auto 27px 6vw;
          font-weight: 800;
          font-size: 2.1rem;
          color: #181838;
          letter-spacing: -1px;
          line-height: 1.17;
        }
        .testimonials-row {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          padding: 6px 1.5vw 16px 1.5vw;
          scroll-snap-type: x mandatory;
          width: 99vw;
          box-sizing: border-box;
        }
        .testimonials-row::-webkit-scrollbar { display: none; }
        .testimonials-card {
          background: #fff;
          border-radius: 32px;
          min-width: 270px;
          max-width: 330px;
          width: 76vw;
          box-shadow: 7px 7px 14px rgba(0,0,0,0.07);
          padding: 20px 20px 48px 20px;
          margin-bottom: 7px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          scroll-snap-align: center;
        }
        .testimonials-body {
          font-size: 1rem;
          font-weight: 400;
          color: #181838;
          margin-bottom: 3px;
        }
        .testimonials-author {
          font-weight: 700;
          font-size: 0.98rem;
          color: #181838;
        }
        .testimonials-featured-block {
          width: 100vw;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
          gap: 14px;
        }
        .testimonials-featured-label {
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.38px;
          color: #181838;
          padding-right: 10px;
          min-width: 109px;
          justify-content: flex-start;
        }
        .testimonials-featured-logos {
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: center;
          height: 48px;
        }
        .testimonials-featured-logos img {
          width: 100px;
          height: 50px;
          object-fit: contain;
        }
        @media (max-width: 700px) {
          .testimonials-section { padding: 24px 0 22px 0; }
          .testimonials-heading { font-size: 1.22rem; margin-left: 3vw;}
          .testimonials-row { gap: 9px; padding: 6px 2vw 12px 2vw; }
          .testimonials-card { min-width: 85vw; max-width: 98vw; padding: 14px 8px 24px 8px;}
          .testimonials-featured-block { flex-direction: column; gap: 8px;}
          .testimonials-featured-label { font-size: 15px; min-width: 90px; }
          .testimonials-featured-logos img { height: 26px; width: 52px;}
        }
      `}</style>
      <div className="testimonials-heading">
        Loved by thousands of iPhone<br />
        and Android users alike
      </div>
      <div className="testimonials-row">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
      <div className="testimonials-featured-block">
        <div className="testimonials-featured-label">Featured in:</div>
        <div className="testimonials-featured-logos">
          {featuredLogos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
