"use client";

export default function AIInsights() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">🤖</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">AI Insights</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Let our AI analyze your patterns and suggest changes for long-term sleep improvement. Get personalized insights and recommendations powered by advanced machine learning.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>AI-driven analysis of your sleep data</li>
          <li>Personalized recommendations for improvement</li>
          <li>Track the impact of changes over time</li>
          <li>Stay ahead with the latest in sleep science</li>
        </ul>
        {/* Removed action button */}
      </div>
    </div>
  );
} 