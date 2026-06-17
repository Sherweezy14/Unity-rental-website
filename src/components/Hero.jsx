export default function Hero() {
    return (
      <section
        className="min-h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,250,242,.95), rgba(255,250,242,.6)), url('/hero.jpg')",
        }}
      >
        <div className="max-w-3xl px-8 md:px-20">
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">
            Boston's Affordable Venue For Events Up To 500 Guests
          </h1>
  
          <div className="space-y-3 text-lg">
            <p>✓ Full Bar & Liquor License</p>
            <p>✓ Commercial Kitchen</p>
            <p>✓ Free Parking</p>
            <p>✓ Dorchester, Boston</p>
          </div>
  
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button className="bg-amber-600 text-white px-6 py-3 rounded">
              Schedule A Tour
            </button>
  
            <button className="border border-amber-600 px-6 py-3 rounded">
              Get Pricing
            </button>
          </div>
        </div>
      </section>
    );
  }