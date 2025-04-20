import React from "react";
import banner from "../assets/banner.jpg";

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Gadget Heaven
          </h1>
          <p className="text-lg text-gray-600">
            Your heavenly destination for the latest and greatest gadgets.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="md:grid md:grid-cols-2 md:gap-8 items-center mb-12">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Journey to Gadget Heaven
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Gadget Heaven, our devotion to all things tech has guided our
              journey. Born from a shared passion for innovation, we envisioned
              a sanctuary where enthusiasts could discover the most sought-after
              smartphones, divine smartwatches, and celestial laptops from the
              leading brands.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that technology should elevate your everyday, and we
              are dedicated to offering you a seamless and delightful shopping
              experience, insightful guidance, and heavenly customer support.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={banner}
              alt="Our Journey"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            What Awaits You in Gadget Heaven
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Smartphones from the Heavens
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Explore a celestial collection of smartphones boasting
                groundbreaking features, breathtaking displays, and heavenly
                performance from top-tier manufacturers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Smartwatches for the Angels
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Stay divinely connected and monitor your well-being with our
                exquisite range of stylish and functional smartwatches.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Laptops Blessed with Power
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Discover the perfect laptop for work, play, or creation. Our
                selection offers a variety of blessed models to meet your every
                need and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Sacred Promise
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are divinely committed to providing you with:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Authentic, high-quality products from the tech heavens</li>
            <li>Prices that are truly a blessing</li>
            <li>A secure and seamless online sanctuary for shopping</li>
            <li>Swift and reliable delivery, like a gift from above</li>
            <li>Heavenly customer support to guide your way</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
