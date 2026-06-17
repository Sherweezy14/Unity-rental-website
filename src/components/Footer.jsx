import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-serif">
            UNITY
          </h2>

          <p className="text-amber-500 uppercase tracking-widest text-xs mt-2">
            Event & Banquet Hall
          </p>

          <p className="mt-6 text-slate-300">
            Affordable venue space for weddings,
            birthdays, repasts, corporate events,
            and community celebrations.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Contact
          </h3>

          <p>10 Dunbar Avenue</p>
          <p>Dorchester, MA 02124</p>

          <p className="mt-3 flex items-center gap-2">
            <FaPhone />
            <a href="tel:6178909657"> (617-890-9657) </a> 
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
        © 2026 Unity Event & Banquet Hall. All Rights Reserved.
      </div>
    </footer>
  );
}