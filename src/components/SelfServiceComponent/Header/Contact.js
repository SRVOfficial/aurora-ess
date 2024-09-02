// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
//             Contact Us
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Have any questions or need support? We’re here to help. Reach out to us and we’ll get back to you as soon as possible.
//           </p>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//           <div className="lg:pr-8">
//             <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Fill out the form below, and our team will get back to you shortly.
//             </p>
            
//             {/* Contact Form */}
//             <form className="mt-8 space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   required
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A28089] hover:bg-[#9b6775] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="lg:pl-8">
//             <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Reach us through any of the methods below. We look forward to hearing from you!
//             </p>
//             <ul className="mt-6 space-y-4">
//               <li>
//                 <span className="font-medium text-gray-900">Email:</span>
//                 <a href="mailto:support@aurora.com" className="text-indigo-600 hover:underline ml-2">support@aurora.com</a>
//               </li>
//               <li>
//                 <span className="font-medium text-gray-900">Phone:</span>
//                 <a href="tel:+1234567890" className="text-indigo-600 hover:underline ml-2">+1 (234) 567-890</a>
//               </li>
//               <li>
//                 <span className="font-medium text-gray-900">Address:</span>
//                 <p className="text-gray-600 ml-2">123 Aurora Lane, Suite 100, Innovation City, IN 12345</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;






import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? We're here to help. Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#A28089] focus:border-[#A28089] transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#A28089] focus:border-[#A28089] transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#A28089] focus:border-[#A28089] transition duration-200"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#A28089] hover:bg-[#9b6775] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A28089] transition duration-200 text-lg font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <p className="text-lg text-gray-600 mb-8">
              Connect with us through any of these methods. We're excited to hear from you!
            </p>
            <ul className="space-y-6">
              <li className="flex items-center">
                <Mail className="text-[#A28089] mr-4" size={24} aria-label="Email" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:support@aurora.com" className="text-[#A28089] hover:underline">support@aurora.com</a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#A28089] mr-4" size={24} aria-label="Phone" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+1234567890" className="text-[#A28089] hover:underline">+1 (234) 567-890</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#A28089] mr-4 mt-1" size={24} aria-label="Address" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">123 Aurora Lane, Suite 100,<br />Innovation City, IN 12345</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
