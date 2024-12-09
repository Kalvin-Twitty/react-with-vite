function Features() {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Features</h1>
        <p className="text-gray-300 mb-8">
          Discover the amazing features of our application.
        </p>
        <ul className="space-y-4">
          {[
            "Blazing fast performance powered by Vite.",
            "Modern and responsive designs with Tailwind CSS.",
            "Scalable and secure backend with Firebase.",
          ].map((feature, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-md text-gray-300"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Features;
