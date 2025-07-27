"use client";

export default function DarkModeSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">🌙</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Dark Mode Support</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Enjoy a calming dark theme for nighttime usage to protect your eyes and maintain sleep hygiene. Switch between light and dark modes for a comfortable experience any time of day.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Toggle between light and dark themes</li>
          <li>Reduce eye strain during nighttime use</li>
          <li>Maintain healthy sleep hygiene</li>
          <li>Seamless and stylish design</li>
        </ul>
        {/* Removed action button */}
      </div>
    </div>
  );
} 