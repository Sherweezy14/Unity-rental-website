const events = [
    "Weddings",
    "Repasts",
    "Birthday Parties",
    "Corporate Events",
    "Baby Showers",
    "Cultural Events",
  ];
  
  export default function EventTypes() {
    return (
      <section className="py-20 px-8">
        <h2 className="text-4xl font-serif text-center mb-12">
          Perfect For Any Occasion
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event}
              className="h-64 rounded-xl bg-slate-200 flex items-end p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{event}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }