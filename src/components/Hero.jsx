import React from 'react';
import heroImage from '../assets/images/hero.jpeg';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})`, minHeight: '60vh' }}
    >
      <div className="absolute inset-0 bg-primary-dark opacity-60"></div>
      <div className="relative container mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold">Trusted Civil & Infrastructure Contractor</h1>
        <p className="mt-4 max-w-2xl text-lg">Hi, I’m <strong>Vikas Kumar Gupta</strong> — 10 years of hands-on experience from junior engineer to project manager. I lead projects in box culverts, channel drains, panel walls, minor & superstructure bridges with safety & timeline focus.</p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-md font-semibold transition">View Projects</a>
          <a href="#contact" className="border border-white px-5 py-3 rounded-md hover:bg-white hover:text-primary transition">Get a Quote</a>
        </div>
      </div>
    </section>
  );
}