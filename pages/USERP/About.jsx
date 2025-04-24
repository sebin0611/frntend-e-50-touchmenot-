import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[#FAF7F5] text-[#0A2C2A]">
      {/* Get In Touch */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h4 className="text-sm text-orange-600 uppercase font-semibold mb-2">Contact</h4>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean
              aliquam sapien velit eu pretium. Suspendisse mattis lectus quis eu vehicula.
            </p>
          </div>
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
            <textarea placeholder="Message" className="w-full border p-2 rounded h-28"></textarea>
            <button className="bg-orange-400 text-white px-6 py-2 rounded font-semibold hover:bg-orange-500">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Contact Boxes */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-2">Email</h4>
          <p>hello@divingo.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-2">Phone</h4>
          <p>(235)-134-6488</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-2">Address</h4>
          <p>San Francisco, CA 94502</p>
        </div>
      </section>

      {/* Office Location and Hours */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Visit our office or warehouse!</h2>
          <p className="text-gray-600 mb-4">
            Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam
            sapien velit eu pretium.
          </p>
          <button className="border border-orange-400 text-orange-500 font-semibold px-5 py-2 rounded hover:bg-orange-50">
            Get Directions
          </button>
        </div>
        <div className="bg-[#0A2C2A] text-white rounded-lg p-6 shadow w-fit">
          <h4 className="text-orange-400 text-sm font-semibold mb-2">Hours</h4>
          <p>Monday – Friday <br /> <span className="text-gray-300">8am – 6pm</span></p>
          <p className="mt-2">Saturdays <br /> <span className="text-gray-300">10am – 5pm</span></p>
          <p className="mt-2">Sundays <br /> <span className="text-gray-300">9am – 3pm</span></p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-sm text-orange-500 font-semibold uppercase mb-2">FAQ</h3>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <ul className="space-y-4 text-gray-800">
            <li>• How do I participate in your programs?</li>
            <li>• Where does my donation go?</li>
            <li>• Can I volunteer remotely?</li>
            <li>• What if I don’t receive my receipt?</li>
          </ul>
        </div>
        <form className="space-y-4">
          <h4 className="text-xl font-semibold mb-2">Ask a different question</h4>
          <input type="text" placeholder="Name" className="w-full border-b p-2 focus:outline-none" />
          <input type="email" placeholder="Email Address" className="w-full border-b p-2 focus:outline-none" />
          <textarea placeholder="Message" className="w-full border-b p-2 h-24 focus:outline-none"></textarea>
          <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500">
            Submit
          </button>
        </form>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#0A2C2A] text-white text-center py-12 px-4 space-y-4">
        <p className="text-xl font-semibold">Join our mission. Volunteer, Donate, Advocate. Get Started Today.</p>
        <p>Email: hello@divingo.com &nbsp; | &nbsp; Call Anytime: (235)-135-6233</p>
        <div className="space-x-4">
          <button className="bg-orange-500 px-6 py-2 rounded font-semibold hover:bg-orange-600">
            Donate Campaigns
          </button>
          <button className="border border-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-[#0A2C2A]">
            Get Involved
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
