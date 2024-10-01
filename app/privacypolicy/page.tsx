import PrivacyPolicy from '@/app/components/policy/PrivacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};
const Privacy = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};

export default Privacy;
