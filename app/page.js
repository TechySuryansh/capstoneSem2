"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      >
        <div className="text-center text-white bg-black/50 p-6 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Health Plus</h1>
          <p className="text-xl max-w-md mx-auto">
            Your personalized sleep & wellness tracker
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Health Plus?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2203/2203171.png"
              alt="Sleep Tracking"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sleep Tracking</h3>
            <p className="text-gray-600">
              Automatically log your sleep patterns and get real-time analysis.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3658/3658752.png"
              alt="Smart Insights"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
            <p className="text-gray-600">
              Understand your sleep quality with easy-to-read reports.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4369/4369754.png"
              alt="Tips and Coaching"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tips & Coaching</h3>
            <p className="text-gray-600">
              Receive personalized tips to improve your sleep cycle.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Sleep Journey Today</h2>
        <p className="mb-6">Join 10,000+ users improving their wellness every night.</p>
        <button className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-xl hover:bg-gray-200">
          Get Started
        </button>
      </section>
    </div>
  );
}