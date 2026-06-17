export default function InquiryForm() {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
  
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-slate-900">
              Check Availability
            </h2>
  
            <p className="mt-4 text-slate-600">
              Tell us about your event and we'll contact you.
            </p>
          </div>
  
          <form className="bg-slate-50 rounded-2xl p-8 shadow-xl">
  
            <div className="grid md:grid-cols-2 gap-5">
  
              <input
                type="text"
                placeholder="Full Name"
                className="border p-4 rounded-lg"
              />
  
              <input
                type="email"
                placeholder="Email"
                className="border p-4 rounded-lg"
              />
  
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-4 rounded-lg"
              />
  
              <input
                type="date"
                className="border p-4 rounded-lg"
              />
  
              <select className="border p-4 rounded-lg">
                <option>Event Type</option>
                <option>Wedding</option>
                <option>Birthday Party</option>
                <option>Repast</option>
                <option>Corporate Event</option>
                <option>Baby Shower</option>
              </select>
  
              <input
                type="number"
                placeholder="Guest Count"
                className="border p-4 rounded-lg"
              />
  
            </div>
  
            <textarea
              rows="5"
              placeholder="Tell us about your event..."
              className="w-full border p-4 rounded-lg mt-5"
            />
  
            <button
              type="submit"
              className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg text-lg font-semibold"
            >
              Request Information
            </button>
          </form>
        </div>
      </section>
    );
  }