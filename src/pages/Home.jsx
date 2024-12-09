import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-800 text-white flex-1">
      {/* Hero Section */}
      <section className="bg-gray-700 py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to My App
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae magna arcu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/features")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow-md"
            >
              Explore Features
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-transparent border border-gray-400 text-white px-6 py-3 rounded shadow-md hover:bg-gray-600"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Fast",
                desc: "Built with Vite for blazing-fast performance.",
              },
              {
                title: "Responsive Design",
                desc: "Crafted with Tailwind CSS for all devices.",
              },
              {
                title: "Scalable Backend",
                desc: "Powered by Firebase for secure and scalable data handling.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-700 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of developers building modern applications today.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow-md"
          >
            Sign Up Now
          </button>
        </div>
      </section>
    </main>
  );
}
