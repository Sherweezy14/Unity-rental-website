export default function Pricing() {
    return (
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-center text-4xl md:text-5xl font-serif text-slate-900">
            Rental Pricing
          </h2>
  
          <p className="text-center text-slate-600 mt-4 mb-12">
            Transparent pricing. No hidden surprises.
          </p>
  
          <div className="grid lg:grid-cols-2 gap-8">
  
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                Grand Ballroom
              </h3>
  
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-bold">$1,800+</span>
                </div>
  
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-bold">$2,800+</span>
                </div>
  
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold text-amber-600">$4,500+</span>
                </div>
  
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">$2,500+</span>
                </div>
              </div>
  
              <p className="mt-6 text-slate-500">
                Capacity up to 500 guests.
              </p>
            </div>
  
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                Private Event Room
              </h3>
  
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-bold">$500+</span>
                </div>
  
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-bold">$800+</span>
                </div>
  
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold text-amber-600">$1,200+</span>
                </div>
  
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">$750+</span>
                </div>
              </div>
  
              <p className="mt-6 text-slate-500">
                Capacity up to 100 guests.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }