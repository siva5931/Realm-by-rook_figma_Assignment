import React from 'react';
import { ArrowRight } from 'lucide-react';
import phoneImage from '../assets/yourPhoneImage.png'; // replace with actual path
import backgroundImage from '../assets/yourBackgroundImage.png'; // replace with actual path

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-heading">
            Your mobile privacy<br />is our mission
          </h1>
          <p className="hero-subheading">
            Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>Get Certo for iPhone</span>
              <ArrowRight className="btn-arrow" aria-label="Arrow" />
            </button>
            <button className="btn-secondary">Get Certo for Android</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-box">
            <div className="hero-blue-top"></div>
            <div className="hero-blue-left"></div>
            <div className="hero-orange-bg">
              <img
                src={backgroundImage}
                alt="Person with phone"
                className="bg-person-image"
                draggable={false}
              />
              <img
                src={phoneImage}
                alt="Certo app interface"
                className="device-mockup"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

        .hero-section {
          width: 100%;
          background: linear-gradient(120deg, #F8FAFF 60%, #EDEFF8 100%);
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }

        .hero-container {
          display: flex;
          align-items: flex-start;
          width: 100%;
          max-width: 1180px;
          padding: 50px 40px;
          box-sizing: border-box;
        }

        .hero-left {
          flex: 2;
          padding-right: 150px;
        }

        .hero-heading {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0A1F44;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-subheading {
          font-size: 1.05rem;
          color: #5A6375;
          line-height: 1.55;
          margin-bottom: 28px;
          max-width: 480px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #FDB022;
          color: #0A1F44;
          border: none;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(253, 176, 34, 0.12);
        }

        .btn-primary:hover {
          background: #F5A515;
        }

        .btn-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.2s;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-secondary {
          background: white;
          color: #0A1F44;
          border: 2px solid #0A1F44;
          padding: 12px 24px;
          border-radius: 999px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #0A1F44;
          color: white;
        }

        .hero-right {
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          position: relative;
        }

        .hero-box {
          position: relative;
          width: 360px;
          height: 350px;
          margin-right: -45px; /* pulls image closer to right edge */
          margin-bottom: -55px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .hero-blue-top {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 12px;
          background: #4336F3;
          z-index: 3;
        }

        .hero-blue-left {
          position: absolute;
          top: 0; left: 0;
          width: 12px;
          height: 100%;
          background: #4336F3;
          z-index: 3;
        }

        .hero-orange-bg {
          position: absolute;
          top: 0;
          left: 12px;
          width: calc(100% - 12px);
          height: 100%;
          background: #F7A51B;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .bg-person-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          z-index: 1;
        }

        .device-mockup {
          position: absolute;
          left: 22px;
          bottom: 8px; /* pushes it to bottom edge */
          width: 130px;
          z-index: 4;
          filter: drop-shadow(0 7px 16px rgba(40, 21, 100, 0.1));
        }

        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 40px 20px;
          }

          .hero-left {
            padding-right: 0;
          }

          .hero-right {
            margin-top: 30px;
            justify-content: center;
          }

          .hero-box {
            width: 90vw;
            height: 220px;
            margin-right: 0;
          }

          .device-mockup {
            width: 80px;
            bottom: 6px;
          }
        }
      `}</style>
    </section>
  );
}
