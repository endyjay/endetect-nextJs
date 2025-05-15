import Link from "next/link";

const QueryCTA = () => {
  return (
    <section className="py-16 bg-endetect-blue-dark">
      {/* ID from original: e6a8877 */}
      {/* Original CSS: overlay background-color: #000000, opacity: 0.8; padding: 60px 0px; heading color: #FFFFFF */}
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between gap-8 p-8 rounded-lg">
          {/* Text Content */}
          <div className="md:flex-grow">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-3">
              Have Queries?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 md:mb-0">
              Whether you have a question about software, pricing, or anything
              else, our team is ready to answer all your questions.
            </p>
          </div>
          {/* Button */}
          <div className="md:flex-shrink-0 mt-6 md:mt-0">
            <Link
              href="/contact" // Original href: contact/index.html
              className="inline-flex items-center justify-center px-8 py-4 bg-endetect-green text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {/* Original icon: <i aria-hidden="true" class="fas fa-arrow-alt-circle-right"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryCTA;
