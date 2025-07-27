"use client";

export default function SleepGoalSetting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">🎯</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Sleep Goal Setting</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Set personalized sleep goals and monitor your progress daily with motivating visual indicators. Achieve better sleep by setting and tracking realistic goals.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Create and customize sleep goals</li>
          <li>Track progress with visual indicators</li>
          <li>Receive encouragement and reminders</li>
          <li>Adjust goals as your needs change</li>
        </ul>
        {/* Removed action button */}
      </div>
    </div>
  );
} 