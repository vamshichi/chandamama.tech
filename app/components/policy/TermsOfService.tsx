import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms of Service for Chandamama.tech</h1>
        <p className="text-gray-600 mb-4">Last Updated: September 25, 2024</p>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using the services provided by Chandamama.tech, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            Chandamama.tech reserves the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on this page. It is your responsibility to review these terms periodically. Your continued use of the services after any changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-4">
            To access certain features of our website, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
          <p className="text-gray-700 mb-4">
            You agree not to engage in any of the following prohibited activities:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Using the service for any illegal or unauthorized purpose.</li>
            <li>Attempting to gain unauthorized access to the service or its related systems or networks.</li>
            <li>Interfering with or disrupting the service or servers or networks connected to the service.</li>
            <li>Uploading, posting, or transmitting any content that is harmful, offensive, or otherwise objectionable.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p className="text-gray-700 mb-4">
            All content, trademarks, and other intellectual property on Chandamama.tech are owned by or licensed to us. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites or services that are not owned or controlled by Chandamama.tech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. You acknowledge and agree that Chandamama.tech shall not be liable for any damage or loss caused by your use of any third-party site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
          <p className="text-gray-700 mb-4">
            The services provided by Chandamama.tech are on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of our services or the information, content, materials, or products included on our site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall Chandamama.tech, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Your access to or use of, or inability to access or use, our services.</li>
            <li>Any conduct or content of any third party on the services.</li>
            <li>Any content obtained from the services.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding arising out of or related to these terms shall be brought exclusively in the courts located in Bangalore, India.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us at:  
            <a href="mailto:info@chandamama.tech" className="text-blue-500 hover:underline"> info@chandamama.tech</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
