import React from 'react';
import girlPhoneImg from '../assets/girlphone.png';

export function SecurityCommitmentSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
              At Certo, mobile security<br />
              is not an afterthought, it’s<br />
              what we do.
            </h2>
            <p className="text-gray-700 mb-8 text-lg max-w-lg">
              With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.
            </p>
            <div className="flex flex-col gap-4 min-w-[300px]">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors text-lg font-bold flex items-center justify-center w-fit shadow">
                Get Certo for iPhone
                <span className="ml-2 text-xl">{'→'}</span>
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-lg font-bold flex items-center justify-center w-fit shadow">
                Get Certo for Android
              </button>
            </div>
          </div>
          {/* RIGHT: IMAGE WITH BORDER */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-t-[12px] border-l-[12px] border-yellow-400 z-0"></div>
              <img
                src={girlPhoneImg}
                alt="Person using mobile phone"
                className="relative z-10 w-[400px] h-[400px] object-cover rounded-3xl shadow"
                style={{ background: "#eee" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
