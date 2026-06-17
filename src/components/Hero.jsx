import { FaCalendarAlt, FaDollarSign } from "react-icons/fa";

export default function Hero() {
    return (
      <section
  className="min-h-[550px] bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('src/assets/Screen Shot 2026-06-17 at 1.38.05 AM.png')",
  }}
>
  <div className="ml-8 md:ml-20 bg-white/90 p-8 rounded-xl max-w-xl shadow-xl">

    <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
      Boston's Affordable  <br />Venue For Events  <br />Up To 500 Guests
    </h1>

    <div className="space-y-3 text-lg">
      <p> <span className="text-amber-600"> ✓ </span> Full Bar & Liquor License</p>
      <p> <span className="text-amber-600"> ✓ </span> Commercial Kitchen</p>
      <p> <span className="text-amber-600"> ✓ </span> Free Parking</p>
      <p> <span className="text-amber-600"> ✓ </span> Dorchester, Boston</p>
    </div>

    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <button className="flex items-center bg-amber-600 text-white px-6 py-3 rounded">
      <span className="text-white mr-1"> <FaCalendarAlt /> </span> Schedule A Tour
      </button>

      <button className="flex items-center border border-b-black px-6 py-3 rounded">
      <span className="text-amber-600 mr-1"> <FaDollarSign /> </span> Get Pricing
      </button>
    </div>

  </div>
</section>
    );
  }