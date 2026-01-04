import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1c1c84]/10 via-[#3b2ca8]/10 to-[#6a1bce]/10 px-6 py-16 md:px-20 lg:px-32 text-gray-900 dark:text-white font-serif">
      <h1
        className={`text-4xl md:text-5xl font-bold mb-16 text-gradient text-center transition-all duration-700 ease-out transform ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        About TravelEase
      </h1>

      <div className="bg-white/30 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-10 shadow-lg max-w-5xl mx-auto">
        <section
          className={`mb-10 transition-all duration-700 ease-out transform delay-150 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At TravelEase, our mission is to make your journeys effortless and enjoyable. We provide top-quality vehicles and seamless booking experiences tailored to your unique travel needs.
          </p>
        </section>

        <section
          className={`mb-10 transition-all duration-700 ease-out transform delay-300 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We aim to be the most trusted and innovative car rental platform, empowering travelers worldwide with access to reliable and affordable transportation solutions.
          </p>
        </section>

        <section
          className={`mb-10 transition-all duration-700 ease-out transform delay-450 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-6 text-primary">Core Values</h2>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            {[
              "Customer-centric service ensuring satisfaction and ease.",
              "Transparency and fairness in all our transactions.",
              "Continuous innovation for better travel experiences.",
              "Environmental responsibility and sustainability.",
              "Integrity and trustworthiness in all our dealings.",
            ].map((val, idx) => (
              <li
                key={idx}
                className="transform transition-transform duration-300 hover:scale-105 hover:text-primary cursor-pointer"
              >
                {val}
              </li>
            ))}
          </ul>
        </section>

        <div
          className={`mt-16 text-center transition-all duration-700 ease-out transform delay-600 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => window.location.href = "/vehicles"}
            className="btn-gradient px-10 py-3 text-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(155,81,224,0.7)]"
          >
            Explore Our Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
