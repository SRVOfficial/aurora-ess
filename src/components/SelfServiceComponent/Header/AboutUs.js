import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
          About Us
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Welcome to <span className="font-bold text-[#A28089]">Aurora Employee Self-Service</span>, your dedicated hub for everything you need as a valued member of the Aurora family. At Aurora, we believe that our employees are our greatest asset, and we are committed to creating an environment where every individual can thrive and succeed.
        </p>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900">Who We Are</h3>
          <p className="mt-4 text-lg text-gray-600">
            Aurora is more than just a company—we are a community of innovative thinkers, passionate doers, and dedicated professionals who come together to create extraordinary results.
          </p>
        </div>

        <div className="lg:pl-8">
          <h3 className="text-2xl font-semibold text-gray-900">What We Do</h3>
          <p className="mt-4 text-lg text-gray-600">
            The Aurora Employee Self-Service platform is designed to empower you by providing quick and easy access to all the tools, resources, and information you need to excel in your role.
          </p>
        </div>

        <div className="lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900">Why We Stand Out</h3>
          <p className="mt-4 text-lg text-gray-600">
            At Aurora, we understand that our employees are at the heart of our success. That’s why we’ve created a user-friendly self-service platform that is tailored to meet your needs.
          </p>
        </div>

        <div className="lg:pl-8">
          <h3 className="text-2xl font-semibold text-gray-900">Our Commitment to You</h3>
          <p className="mt-4 text-lg text-gray-600">
            We are committed to providing a supportive and inclusive workplace where everyone feels valued and respected. Our self-service platform is just one of the many ways we strive to enhance your experience at Aurora.
          </p>
        </div>

        <div className="lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900">Join Us in Shaping the Future</h3>
          <p className="mt-4 text-lg text-gray-600">
            At Aurora, we are always looking ahead, exploring new ways to innovate and improve. We invite you to join us in shaping the future of our company and making a positive impact on the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
