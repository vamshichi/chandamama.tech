import Aboutchandamama from "@/app/components/about/aboutChandamama";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'aboutChandamama',
};

const About: React.FC = () => {
  return (
    <div>
      <Aboutchandamama />
    </div>
  );
};

export default About;
