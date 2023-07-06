import Download from "../components/bookmark/Download";
import Enroll from "../components/bookmark/Enroll";
import FAndQ from "../components/bookmark/FAndQ";
import Features from "../components/bookmark/Features";
import Footer from "../components/bookmark/Footer";
import Header from "../components/bookmark/Header";
import Hero from "../components/bookmark/Hero";

function BookMark() {
  return (
    <div className="font-Poppins">
      <Header />
      <Hero />
      <Features />
      <Download />
      <FAndQ />
      <Enroll />
      <Footer />
    </div>
  );
}

export default BookMark;
