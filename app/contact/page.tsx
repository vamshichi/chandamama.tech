import { Metadata } from "next";
import ContactPage from "../components/contact/ContactPage";
// import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ContactPage />
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
