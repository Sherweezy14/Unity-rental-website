import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
  return (
    <header  className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-center">
          <h1 className="text-5xl font-serif tracking-widest text-slate-900">
            UNITY
          </h1>
          <p className="text-xs uppercase tracking-[1px] text-amber-600">
            - <span className="text-blue-950">Event & Banquet</span>  Hall - 
          </p>
        </div>

        <nav className="hidden lg:flex gap-8 text-slate-700 text-xl font-medium">
          <a href="#">Home</a>
          <a href="#eventtypes">Event Types</a>
          <a href="#spaces">Venue Spaces</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Schedule a Tour</a>
        </nav>
        <div className="text-center">
 
          <a className="flex  items-center gap-1" href="tel:6178909657" >
          <span className="text-amber-600"> <FaPhone /> </span>
            (617) 890-9657
          </a>
          <a href="#contact">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-lg transition">
            Schedule Tour
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}