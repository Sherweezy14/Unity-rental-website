import ReactPixel from "../util/MetaPixel";
export default function InquiryForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Tell Meta this is a lead
    ReactPixel.track("Lead");

    // custom event
    ReactPixel.trackCustom("RentalInquiry", {
      eventType: formData.get("eventType"),
      guestCount: formData.get("guestCount"),
    });

    const response = await fetch("https://formspree.io/f/xdavvbbe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Thank you! We'll contact you shortly.");
      e.target.reset();
    }
  }
  return (
    <section id="contact" className="py-20 px-6 scroll-mt-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-slate-900">
            Check Availability
          </h2>

          <p className="mt-4 text-slate-600">
            Tell us about your event and we'll contact you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="Name"
              placeholder="Full Name"
              className="border p-4 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-4 rounded-lg"
            />

            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              className="border p-4 rounded-lg"
            />

            <input type="date" name="date" className="border p-4 rounded-lg" />

            <select name="eventType" className="border p-4 rounded-lg">
              <option>Event Type</option>
              <option>Wedding</option>
              <option>Birthday Party</option>
              <option>Repast</option>
              <option>Corporate Event</option>
              <option>Baby Shower</option>
              <option>Quinceanera</option>
              <option>Anniversary</option>
            </select>

            <input
              type="number"
              name="guestCount"
              placeholder="Guest Count"
              className="border p-4 rounded-lg"
            />
          </div>

          <textarea
            rows="5"
            name="aboutEvent"
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
