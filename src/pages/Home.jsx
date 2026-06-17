import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventTypes from "../components/EventTypes";
import VenueSpaces from "../components/VenueSpaces";
import Pricing from "../components/Pricing";
import InquiryForm from "../components/InquiryForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <EventTypes id="eventtypes" />
      <VenueSpaces id="spaces" />
      <Pricing id="prices" />
      <InquiryForm id="contact" />
      <Footer />
    </>
  );
}