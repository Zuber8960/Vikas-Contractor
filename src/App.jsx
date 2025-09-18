// /*
// Vikas Kumar Gupta - Construction Portfolio (single-file React app)
// Preview: This is a self-contained React component (App.jsx) meant as a starting point.
// Tailwind classes are used for styling (no imports here). To run as a real project create-react-app or Vite + Tailwind is recommended.

// How to use:
// 1) Create a React app (Vite recommended):
//    npm create vite@latest vikas-portfolio -- --template react
//    cd vikas-portfolio
// 2) Install Tailwind: follow tailwindcss official setup for React + Vite.
// 3) Replace src/App.jsx with this file, add sample images or keep placeholders.
// 4) npm install && npm run dev (or npm run build && deploy to Vercel/Netlify)

// This file includes components: Header, Hero, About, Services, Projects, Testimonials, ContactForm, Footer.
// Edit the sample data to reflect Vikas Kumar Gupta's real projects and images.
// */


//=============================================================================


import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-primary bg-neutral-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;






























//=============================================================================

// import React from 'react';

// const sampleProjects = [
//   {
//     id: 1,
//     title: 'Box Culvert - River Crossing (Precast)',
//     location: 'Lucknow, UP',
//     duration: '6 months',
//     summary: 'Design & construction of 2x3m precast box culverts including foundation, bedding and backfill. Handled multiple labour gangs, QA and schedule management.',
//     tags: ['Box Culvert', 'Precast', 'Drainage']
//   },
//   {
//     id: 2,
//     title: 'Channel Drain & Retaining Works',
//     location: 'Ghaziabad, UP',
//     duration: '4 months',
//     summary: 'Channel drain lining, slope protection, and minor retaining walls for a municipal project.',
//     tags: ['Channel Drain', 'Retaining Wall']
//   },
//   {
//     id: 3,
//     title: 'Minor Superstructure Bridge',
//     location: 'Prayagraj, UP',
//     duration: '9 months',
//     summary: 'Construction of a minor bridge superstructure (single span) including formwork, reinforcement and concrete pour. Managed subcontractors and site safety.',
//     tags: ['Bridge', 'Superstructure', 'Formwork']
//   },
//   {
//     id: 4,
//     title: 'Arrai Panner Wall & Compound Works',
//     location: 'Varanasi, UP',
//     duration: '2 months',
//     summary: 'Masonry & paneling, site finishing and compound gate works for a residential client.',
//     tags: ['Masonry', 'Panel Wall']
//   }
// ];

// function Header(){
//   return (
//     <header className="bg-slate-900 text-white shadow-md">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold">VK</div>
//           <div>
//             <div className="font-semibold">Vikas Kumar Gupta</div>
//             <div className="text-xs text-slate-300">Construction Project Manager • 10+ years</div>
//           </div>
//         </div>
//         <nav className="space-x-4 hidden md:block">
//           <a href="#services" className="hover:underline">Services</a>
//           <a href="#projects" className="hover:underline">Projects</a>
//           <a href="#about" className="hover:underline">About</a>
//           <a href="#contact" className="hover:underline">Contact</a>
//         </nav>
//         <a href="#contact" className="bg-yellow-500 text-slate-900 px-4 py-2 rounded-md font-medium">Hire / Contact</a>
//       </div>
//     </header>
//   );
// }

// function Hero(){
//   return (
//     <section 
//     className="relative bg-cover bg-center text-white" 
//   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')" }}
// >
//       <div className="backdrop-brightness-50">
//         <div className="container mx-auto px-6 py-24">
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Trusted Civil & Infrastructure Contractor</h1>
//           <p className="mt-4 max-w-2xl">Hi, I’m <strong>Vikas Kumar Gupta</strong> — 10 years of hands-on experience from junior engineer to project manager. I run a construction firm delivering box culverts, channel drains, panel walls and minor bridges with safety and timeline focus.</p>
//           <div className="mt-6 flex gap-3">
//             <a href="#projects" className="bg-yellow-500 text-slate-900 px-4 py-2 rounded-md font-semibold">View Projects</a>
//             <a href="#contact" className="border border-white px-4 py-2 rounded-md">Get a Quote</a>
//           </div>
//           <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
//             <StatCard label="Years" value="10+" />
//             <StatCard label="Completed" value="35+" />
//             <StatCard label="Teams Managed" value="5" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function StatCard({label, value}){
//   return (
//     <div className="bg-white/10 p-4 rounded-md">
//       <div className="text-2xl font-bold">{value}</div>
//       <div className="text-sm text-slate-200">{label}</div>
//     </div>
//   );
// }

// function About(){
//   return (
//     <section id="about" className="container mx-auto px-6 py-16">
//       <div className="grid md:grid-cols-3 gap-8 items-center">
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-bold">About Vikas</h2>
//           <p className="mt-4 text-slate-700">Vikas Kumar Gupta is an experienced civil engineer and construction manager with a decade of experience across municipal and infrastructure projects. He started as a junior engineer and progressed to project manager leading multidisciplinary crews. Areas of expertise include precast & cast-in-place concrete works, minor bridge superstructures, channel drainage, retaining/panel walls and site coordination.</p>

//           <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
//             <li className="flex gap-2"><strong>Experience:</strong> 10 years</li>
//             <li className="flex gap-2"><strong>Firm:</strong> VK Construction (example)</li>
//             <li className="flex gap-2"><strong>Location:</strong> Uttar Pradesh, India</li>
//             <li className="flex gap-2"><strong>Roles:</strong> Project Manager, Site Engineer</li>
//           </ul>
//         </div>
//         <div className="bg-slate-100 rounded-lg p-4">
//           <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center">Profile Photo</div>
//           <div className="mt-4">
//             <h3 className="font-semibold">Certifications</h3>
//             <ul className="text-sm mt-2 text-slate-600">
//               <li>- Site Safety & Quality (example cert)</li>
//               <li>- Concrete Technology Workshop</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services(){
//   const services = [
//     {title: 'Box Culvert Construction', desc: 'Precast & cast-in-place box culvert construction, bedding, backfill and QA.'},
//     {title: 'Channel Drain & Lining', desc: 'Concrete lining, slope protection and water management.'},
//     {title: 'Minor Bridges & Superstructures', desc: 'Formwork, reinforcement, concreting and finishing.'},
//     {title: 'Panel/Arrai Walls', desc: 'Masonry, panel finishes and compound work.'}
//   ];
//   return (
//     <section id="services" className="bg-slate-50 py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-2xl font-bold">Services</h2>
//         <div className="mt-6 grid md:grid-cols-2 gap-4">
//           {services.map((s, i) => (
//             <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
//               <h3 className="font-semibold">{s.title}</h3>
//               <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Projects(){
//   return (
//     <section id="projects" className="container mx-auto px-6 py-16">
//       <h2 className="text-2xl font-bold">Selected Projects</h2>
//       <p className="text-sm text-slate-600 mt-2">A sample of projects delivered by the firm. Click any card for more details.</p>
//       <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {sampleProjects.map(proj => (
//           <ProjectCard key={proj.id} project={proj} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function ProjectCard({project}){
//   return (
//     <article className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col">
//       <div className="h-40 h-40 bg-gray-200 rounded-md bg-cover bg-center rounded-md flex items-center justify-center"
//        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')" }} 
//        >Image
//        </div>
//       <h3 className="mt-3 font-semibold text-lg">{project.title}</h3>
//       <div className="text-sm text-slate-500">{project.location} • {project.duration}</div>
//       <p className="mt-2 text-slate-600 flex-1">{project.summary}</p>
//       <div className="mt-4 flex flex-wrap gap-2">
//         {project.tags.map((t, i) => <span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>)}
//       </div>
//       <div className="mt-4 flex gap-2">
//         <button className="px-3 py-2 rounded bg-slate-800 text-white text-sm">View Details</button>
//         <a href="#contact" className="px-3 py-2 rounded border text-sm">Request Quote</a>
//       </div>
//     </article>
//   );
// }

// function Testimonials(){
//   return (
//     <section className="bg-yellow-50 py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-2xl font-bold">Clients & Testimonials</h2>
//         <div className="mt-6 grid md:grid-cols-2 gap-4">
//           <div className="p-4 bg-white rounded shadow">"Delivered the culvert ahead of schedule. Professional crew and strong coordination." — Municipal Works Dept.</div>
//           <div className="p-4 bg-white rounded shadow">"Handled site issues and kept quality tight during rains." — Site Engineer, EPC Contractor</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContactForm(){
//   return (
//     <section id="contact" className="container mx-auto px-6 py-16">
//       <div className="grid md:grid-cols-2 gap-8 items-start">
//         <div>
//           <h2 className="text-2xl font-bold">Get a Quote</h2>
//           <p className="mt-2 text-slate-600">Share your project brief and contact details; Vikas will reach out to discuss scope and timelines.</p>
//           <ul className="mt-4 text-sm text-slate-700 space-y-2">
//             <li><strong>Email:</strong> vikas@example.com</li>
//             <li><strong>Phone:</strong> +91 99999 99999</li>
//             <li><strong>Office:</strong> Uttar Pradesh, India</li>
//           </ul>
//         </div>
//         <form className="bg-white p-6 rounded-lg shadow">
//           <label className="block text-sm">Name</label>
//           <input className="w-full border rounded px-3 py-2 mt-1" placeholder="Your name" />
//           <label className="block text-sm mt-3">Email or Phone</label>
//           <input className="w-full border rounded px-3 py-2 mt-1" placeholder="Email or phone" />
//           <label className="block text-sm mt-3">Project Brief</label>
//           <textarea className="w-full border rounded px-3 py-2 mt-1" rows={4} placeholder="Short description of your work" />
//           <div className="mt-4 flex gap-2">
//             <button type="button" className="px-4 py-2 bg-slate-900 text-white rounded">Send</button>
//             <button type="reset" className="px-4 py-2 border rounded">Clear</button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// function Footer(){
//   return (
//     <footer className="bg-slate-900 text-white py-6">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         <div>© {new Date().getFullYear()} Vikas Kumar Gupta — Construction & Infrastructure</div>
//         <div className="text-sm text-slate-300">Built for showcasing projects and winning contracts. Contact: vikas@example.com</div>
//       </div>
//     </footer>
//   );
// }

// export default function App(){
//   return (
//     <div className="min-h-screen font-sans bg-white text-slate-900">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Services />
//         <Projects />
//         <Testimonials />
//         <ContactForm />
//       </main>
//       <Footer />
//     </div>
//   );
// }
