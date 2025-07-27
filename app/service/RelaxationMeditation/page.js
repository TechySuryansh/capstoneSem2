"use client";

export default function RelaxationMeditation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">🧘</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Relaxation & Meditation</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Explore guided meditations, breathing exercises, and calming sleep music to help you wind down. Our relaxation tools are designed to reduce stress and prepare your mind for restful sleep.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Guided meditation sessions</li>
          <li>Breathing and mindfulness exercises</li>
          <li>Soothing sleep music playlists</li>
          <li>Tips for creating a relaxing bedtime routine</li>
        </ul>
        {/* Removed action button */}
      </div>
    </div>
  );
} 