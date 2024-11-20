import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
const ProductSupport = () => {
  const handlePreDefault = (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Product Support</h1>
        <p className="text-gray-600 mt-2">
          Need help? We're here to assist you with any issues or questions.
        </p>
      </header>

      {/* Support Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Submit a Support Request
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border w-full p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border w-full p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              placeholder="Enter the product name"
              className="border w-full p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Describe your issue"
              rows="4"
              className="border w-full p-2 rounded"
              required
            ></textarea>
          </div>
          <button
            onClick={handlePreDefault}
            type="submit"
            className="btn bg-customPurple text-xl w-full"
          >
            Submit
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="border p-4 rounded">
            <summary className="font-medium cursor-pointer">
              How do I return a product?
            </summary>
            <p className="mt-2 text-gray-600">
              You can return a product by filling out our return form or
              contacting support within 30 days of purchase.
            </p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-medium cursor-pointer">
              How do I track my order?
            </summary>
            <p className="mt-2 text-gray-600">
              Use the tracking number provided in your confirmation email to
              track your order on our tracking page.
            </p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-medium cursor-pointer">
              Can I update my account information?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes, go to the settings page in your account and update your
              information as needed.
            </p>
          </details>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you still need assistance, feel free to contact us directly:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-1 text-base">
            <IoIosMail />
            <a href="mailto:support@example.com" className="text-blue-500">
              web@programming-hero.com
            </a>
          </li>
          <li className="flex items-center gap-1 text-base">
            <FaPhoneAlt /> +880 (151) 123-4567
          </li>
          <li className="flex items-center gap-1 text-base">
            <FaMapMarkedAlt /> Level-4, 34, Awal Centre, Banani, Dhaka
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProductSupport;
