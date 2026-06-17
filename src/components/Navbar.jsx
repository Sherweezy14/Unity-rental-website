import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-center">
          <h1 className="text-5xl font-serif tracking-widest text-slate-900">
            UNITY
          </h1>
          <p className="text-xs uppercase tracking-[1px] text-amber-600">
            - <span className="text-blue-950">Event & Banquet</span>  Hall - 
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-slate-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/weddings">Weddings</Link>
          <Link to="/spaces">Venue Spaces</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Reviews</Link>
          <Link to="/contact">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="text-center">
 
          <a className="flex  items-center gap-1" href="tel:6172698383" >
          <span className="text-amber-600"> <FaPhone /> </span>
            (617) 269-8383
          </a>
          
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-lg transition">
          Schedule Tour
          </button>
        </div>
      </div>
    </header>
  );
}