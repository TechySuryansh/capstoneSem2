"use client";

export default function LifestyleTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">🍽️</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Lifestyle Tracker</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Track caffeine, screen time, and activity levels to see how daily choices impact your sleep. Our lifestyle tracker helps you make healthier decisions for better rest.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Log caffeine and food intake</li>
          <li>Monitor screen time and activity</li>
          <li>Correlate lifestyle habits with sleep quality</li>
          <li>Get actionable feedback for improvement</li>
        </ul>
        {/* Removed action button */}
      </div>
    </div>
  );
} 