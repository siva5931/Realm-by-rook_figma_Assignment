import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SecurityCommitmentSection } from './components/SecurityCommitmentSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CTASections } from './components/CTASections';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <HeroSection />
        <TestimonialsSection />
        <SecurityCommitmentSection />
        <FeaturesSection />
        <CTASections />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
