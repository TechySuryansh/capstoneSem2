"use client";

export default function SmartReminders() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">📱</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Smart Reminders</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Get timely reminders to sleep, log your habits, and follow your night routine consistently. Our smart reminders adapt to your schedule and help you build healthy sleep habits.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Customizable reminder times</li>
          <li>Habit tracking and notifications</li>
          <li>Integrates with your daily routine</li>
          <li>Motivational nudges to stay on track</li>
        </ul>
        {/* Removed action button */}
      </div>
    </div>
  );
} 