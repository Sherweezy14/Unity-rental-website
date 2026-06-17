import grandBallroomImg from "/Users/sherwyn/Downloads/Unity-rental-website/src/assets/grandballroom.jpg"
import privateEventRoomImg from "/Users/sherwyn/Downloads/Unity-rental-website/src/assets/privateroom.PNG"
export default function VenueSpaces() {
    return (
      <section className="bg-white py-20 px-8">
        <h2 className="text-4xl font-serif text-center mb-12">
          Our Spaces
        </h2>
  
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <img
              src={grandBallroomImg}
              alt=""
              className="h-96 w-full object-cover"
            />
  
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Grand Ballroom
              </h3>
  
              <p className="text-amber-600 font-semibold mt-2">
                Up To 500 Guests
              </p>
  
              <p className="mt-4">
                Perfect for weddings, galas, receptions and large celebrations.
              </p>
            </div>
          </div>
  
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <img
              src={privateEventRoomImg}
              alt=""
              className="h-96 w-full object-cover"
            />
  
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Private Event Room
              </h3>
  
              <p className="text-amber-600 font-semibold mt-2">
                Up To 100 Guests
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }