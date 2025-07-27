"use client";

export default function SleepTracking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">🛏️</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Sleep Tracking</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Our Sleep Tracking service helps you monitor your sleep duration, quality, and stages. View detailed logs and insights to optimize your sleep. Start tracking your sleep today and discover patterns that can help you improve your rest and overall wellness.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Automatic and manual sleep logging</li>
          <li>Sleep stage analysis (light, deep, REM)</li>
          <li>Daily, weekly, and monthly sleep summaries</li>
          <li>Personalized recommendations for better sleep</li>
        </ul>
        {/* Removed action button */}
      </div>
    </div>
  );
} 