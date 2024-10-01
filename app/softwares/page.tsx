import { Metadata } from 'next';
import SoftwareSection from '../components/softwares/SoftwareSection';

export const metadata: Metadata = {
  title: 'Softwares',
};

const Privacy = () => {
  return (
    <div>
        <SoftwareSection />
    </div>
  );
};

export default Privacy;
