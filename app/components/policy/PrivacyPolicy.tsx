import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy for Chandamama.tech</h1>
        <p className="text-gray-600 mb-4">
          At Chandamama.tech, we are dedicated to safeguarding your privacy. This privacy policy describes the types of information we collect, how we use it, and the measures we take to protect your personal information. By using our website, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li><strong>Personal Information:</strong> This includes names, email addresses, and any other details you provide through contact forms or newsletter sign-ups.</li>
          <li><strong>Non-Personal Information:</strong> This includes your IP address, browser type, device information, and site interaction patterns. We may collect this information through cookies and other tracking technologies.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>To provide and maintain our website</li>
          <li>To notify you about changes to our website</li>
          <li>To allow you to participate in interactive features when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our website</li>
          <li>To monitor the usage of our website</li>
          <li>To detect, prevent, and address technical issues</li>
          <li>To send you newsletters, marketing materials, and other information that may interest you (with your consent)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. Cookies</h2>
        <p className="text-gray-600 mb-4">
          Cookies are files with small amounts of data that are commonly used as anonymous unique identifiers. We use cookies to track your activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Third-Party Services</h2>
        <p className="text-gray-600 mb-4">
          Our website may contain links to third-party sites or services that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of service of any third-party site you visit.
        </p>
        
        <p className="text-gray-600 mb-4">
          We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Changes to This Privacy Policy</h2>
        <p className="text-gray-600 mb-4">
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about this privacy policy, please contact us:
        </p>
        <p className="text-gray-600 mb-4">Email: info@chandamama.tech</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
