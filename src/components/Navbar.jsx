import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div>
          <h1 className="text-3xl font-serif tracking-widest text-slate-900">
            UNITY
          </h1>
          <p className="text-xs uppercase tracking-[4px] text-amber-600">
            Event & Banquet Hall
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-slate-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/weddings">Weddings</Link>
          <Link to="/spaces">Venue Spaces</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-lg transition">
          Schedule Tour
        </button>
      </div>
    </header>
  );
}