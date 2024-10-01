import TermsOfService from "@/app/components/policy/TermsOfService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms Of Service',
};

const PrivacyPage: React.FC = () => {
  return (
    <div>
      <TermsOfService />
    </div>
  );
};

export default PrivacyPage;
