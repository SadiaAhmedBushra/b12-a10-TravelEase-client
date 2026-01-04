import React from "react";

const PrivacyTerms = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeIn text-primary">
        Privacy Policy & Terms of Service
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          At TravelEase, your privacy is our priority. We collect only the necessary data to provide you with the best experience.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>We never share your personal data with third parties without your consent.</li>
          <li>All payment information is securely processed through trusted providers.</li>
          <li>You can request deletion of your personal data at any time.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By using TravelEase, you agree to the following terms:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>You must be at least 18 years old to rent a vehicle.</li>
          <li>Vehicles must be used in accordance with local laws and regulations.</li>
          <li>Any damage or violation may incur penalties as described in our detailed terms.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Last Updated</h2>
        <p className="text-gray-700 dark:text-gray-300">
          This policy was last updated on January 1, 2026. We reserve the right to make changes at any time.
        </p>
      </section>
    </div>
  );
};

export default PrivacyTerms;
