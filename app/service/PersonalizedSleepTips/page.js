"use client";
import { useState } from "react";

const tips = [
  "Go to bed and wake up at the same time every day, even on weekends.",
  "Avoid caffeine and heavy meals at least 3 hours before bedtime.",
  "Create a relaxing bedtime routine (reading, meditation, or gentle music).",
  "Keep your bedroom cool, dark, and quiet for optimal sleep.",
  "Limit screen time 1 hour before bed to reduce blue light exposure.",
  "Get some sunlight exposure during the day to regulate your sleep cycle."
];

export default function PersonalizedSleepTips() {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">💡</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Personalized Sleep Tips</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Receive tailored suggestions based on your sleep habits, lifestyle, and goals to help you rest better. Our tips are designed to be practical and easy to implement for immediate improvements.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Daily actionable tips for better sleep</li>
          <li>Personalized based on your sleep data</li>
          <li>Expert-backed advice and recommendations</li>
          <li>Track your progress as you apply tips</li>
        </ul>
        <button
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 transition font-bold text-lg mt-2"
          onClick={() => setShowTips(true)}
        >
          Get My Tips
        </button>
      </div>
      {showTips && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-indigo-600 text-2xl font-bold"
              onClick={() => setShowTips(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Your Sleep Tips</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-2">
              {tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 