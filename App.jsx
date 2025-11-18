import React from "react";

// Satisfyloner — Single-file React app (App.jsx)
// Tailwind CSS assumed. Place your assets in /public or /assets (logo: tosin.png, photos: image1.jpg)

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* NAVBAR */}
      <header className="bg-[#0d2733] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/tosin.png" alt="Satisfyloner logo" className="h-12 w-12 rounded" />
            <div>
              <h1 className="font-bold text-xl">Satisfyloner</h1>
              <p className="text-sm text-gray-200">Comedy • Motivation • Skits • Fun</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#motivation" className="hover:underline">Motivation</a>
            <a href="#comedy" className="hover:underline">Comedy</a>
            <a href="#media" className="hover:underline">Media</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          <div className="md:hidden">{/* mobile menu placeholder */}</div>
        </div>
      </header>

      {/* HERO / HOME */}
      <main id="home" className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d2733]">Welcome to Satisfyloner</h2>
            <p className="mt-4 text-lg text-gray-700">A place where laughter meets motivation. Skits, punchlines, and power-packed messages that lift you — created by Satisfyloner.</p>

            <div className="mt-6 flex gap-3">
              <a href="#media" className="px-5 py-2 rounded bg-green-600 text-white font-semibold">Watch Videos</a>
              <a href="#contact" className="px-5 py-2 rounded border border-[#0d2733] text-[#0d2733]">Contact</a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600">Follow on:</p>
              <div className="flex gap-3 mt-2">
                <a href="https://www.facebook.com/share/1KQHCtASc8/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-sm">Facebook</a>
                <a href="https://youtube.com/@satisfylonertv?si=0f_DspdAOuxfAYk5" target="_blank" rel="noreferrer" className="text-sm">YouTube</a>
                <a href="https://www.instagram.com/satisfyloner_godson" target="_blank" rel="noreferrer" className="text-sm">Instagram</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <img src="/WhatsApp Image 2025-11-17 at 20.49.47.jpeg" alt="Satisfyloner photo" className="w-full h-72 object-cover rounded-lg" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <div className="bg-white rounded-lg p-8 shadow">
            <h3 className="text-2xl font-bold text-[#0d2733]">About Satisfyloner</h3>
            <p className="mt-4 text-gray-700">Satisfyloner creates comedy skits and motivational short speeches that entertain and uplift. With active channels on YouTube, Facebook, Instagram and WhatsApp, the goal is to spread positivity and laughter across the globe.</p>

            <ul className="mt-4 grid sm:grid-cols-2 gap-4">
              <li className="p-4 border rounded"><strong>Genres:</strong> Comedy, Motivational Speech, Skits</li>
              <li className="p-4 border rounded"><strong>Reach:</strong> YouTube • Facebook • Instagram • WhatsApp</li>
            </ul>
          </div>
        </section>

        {/* MOTIVATION */}
        <section id="motivation" className="mt-12">
          <h3 className="text-2xl font-bold text-[#0d2733] mb-4">Motivational Messages</h3>

          <div className="grid md:grid-cols-3 gap-4">
            <blockquote className="p-6 bg-white rounded-lg shadow">"No matter what life throws at you, accept the lessons in defeat and keep moving forward. Growth comes with every step." — Satisfyloner</blockquote>
            <blockquote className="p-6 bg-white rounded-lg shadow">"Every setback carries the seed of a stronger comeback. Keep the faith."</blockquote>
            <blockquote className="p-6 bg-white rounded-lg shadow">"Success is not about speed but direction. Small steps daily."</blockquote>
          </div>
        </section>

        {/* COMEDY / SKITS */}
        <section id="comedy" className="mt-12">
          <h3 className="text-2xl font-bold text-[#0d2733] mb-4">Comedy & Skits</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Sample Skit — "Tomorrow Pay"</h4>
              <p className="mt-2 text-gray-700">Short sketch where two friends argue about who will pay for the jollof; the one who promises 'tomorrow' gets pestered hilariously until he pays.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Punchline — "Parent Visit"</h4>
              <p className="mt-2 text-gray-700">A comic scene where your parent asks you to welcome guests — and then puts you in the hot seat to explain family history.</p>
            </div>
          </div>
        </section>

        {/* MEDIA / GALLERY */}
        <section id="media" className="mt-12">
          <h3 className="text-2xl font-bold text-[#0d2733] mb-6">Media</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {/* YouTube embed: use specific video IDs in production. Here we link to channel and embed a placeholder using an example video id. Replace VIDEO_ID with a real video id for embedding. */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-semibold">YouTube Channel</h5>
              <p className="text-sm mt-2 text-gray-600">Subscribe for skits & motivational shorts.</p>
              <a href="https://youtube.com/@satisfylonertv?si=0f_DspdAOuxfAYk5" target="_blank" rel="noreferrer" className="mt-3 inline-block text-green-600 font-semibold">Open on YouTube</a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-semibold">Instagram</h5>
              <a href="https://www.instagram.com/satisfyloner_godson" target="_blank" rel="noreferrer">Open Instagram</a>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-semibold">Facebook</h5>
              <a href="https://www.facebook.com/share/1KQHCtASc8/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Open Facebook</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-20">
          <h3 className="text-2xl font-bold text-[#0d2733] mb-4">Contact</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700">For collaborations, bookings or media: </p>
              <p className="mt-3"><strong>Email:</strong> <a href="mailto:youngface310@gmail.com" className="text-green-600">youngface310@gmail.com</a></p>
              <p className="mt-2"><strong>WhatsApp:</strong> Add your number to show here.</p>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Follow & join the community:</p>
                <div className="flex gap-3 mt-2">
                  <a href="https://youtube.com/@satisfylonertv?si=0f_DspdAOuxfAYk5" target="_blank" rel="noreferrer">YouTube</a>
                  <a href="https://www.facebook.com/share/1KQHCtASc8/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook</a>
                </div>
              </div>
            </div>

            <form className="bg-white p-6 rounded-lg shadow" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:youngface310@gmail.com?subject=Website%20Contact&body=Please%20write%20your%20message%20here'; }}>
              <label className="block text-sm font-medium">Your Name</label>
              <input className="mt-2 w-full border rounded px-3 py-2" required />

              <label className="block text-sm font-medium mt-4">Message</label>
              <textarea className="mt-2 w-full border rounded px-3 py-2 h-28" required />

              <button type="submit" className="mt-4 px-4 py-2 bg-[#0d2733] text-white rounded">Send Email</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d2733] text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Satisfyloner • All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

/*
  Deployment notes (add to README):
  1. Ensure Tailwind is configured (or replace classes with plain CSS).
  2. Put assets in /public: tosin.png, WhatsApp Image...jpeg
  3. To deploy on GitHub Pages: build a React app (create-react-app or Vite), push to repo, enable GitHub Pages or use Vercel for zero-config deployment.
  4. Replace placeholder video IDs with real YouTube video IDs for iframe embeds.
*/