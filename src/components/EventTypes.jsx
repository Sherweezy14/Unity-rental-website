import weddingImg from "../assets/wedding.png"
import birthdayImg from "../assets/birthday.JPG"
import babyShowerImg from "../assets/babyshower.png"
import culturalImg from "../assets/Cultural.JPG"
import corporateImg from "../assets/corporate.png"
import repastImg from "../assets/repast.JPG"
import { useState } from "react"

import {
  FaHeart,
  FaCross,
  FaBirthdayCake,
  FaBriefcase,
  FaBaby,
  FaMusic,
} from "react-icons/fa";



const events = [
  {
    title: "Weddings",
    image: weddingImg,
    favcon: <FaHeart />
  },
  {
    title: "Repasts",
    image: repastImg,
    favcon: <FaCross />
  },
  {
    title: "Birthdays",
    image: birthdayImg,
    favcon: <FaBirthdayCake />
  },
  {
    title: "Corporate",
    image: corporateImg,
    favcon: <FaBriefcase />
  },
  {
    title: "Baby Showers",
    image: babyShowerImg,
    favcon: <FaBaby />
  },
  {
    title: "Cultural",
    image: culturalImg,
    favcon: <FaMusic />
  },
];
  
  export default function EventTypes() {
    const [selectedImage,setSelectedImage] = useState(null)
    return (
      <section id="eventtypes" className="scroll-mt-26 px-8">
        <h2 className="text-2xl font-serif text-center mb-2">
          Perfect For Any Occasion
        </h2>
  
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
               onClick={()=>setSelectedImage(event.image)} 
               className="h-36  bg-cover  bg-center rounded-xs bg-slate-200 flex flex-col justify-end items-center p-4 shadow-lg" style={{
                backgroundImage: `url(${event.image})`,
              }}
            >
              <p className="text-white text-xl drop-shadow-black drop-shadow-xs"> {event.favcon} </p>
              <h3 className="text-2xl text-center drop-shadow-black drop-shadow-lg text-white font-thin">{event.title}</h3>
            </div>
          ))}
        </div>
        {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
        >
          <img
            src={selectedImage}
            alt="Event preview"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
      </section>
    );
  }