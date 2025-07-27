"use client";

export default function SleepAnalyticsReports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">📊</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">Sleep Analytics & Reports</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Get daily, weekly, and monthly reports with easy-to-understand graphs. Discover trends and track improvements in your sleep quality over time. Our analytics help you make informed decisions for a healthier sleep routine.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-8 self-start">
          <li>Visualize your sleep data with interactive charts</li>
          <li>Identify trends and patterns in your sleep</li>
          <li>Track improvements and set new goals</li>
          <li>Download or share your reports</li>
        </ul>
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 transition font-bold text-lg mt-2">
          View My Reports
        </button>
      </div>
    </div>
  );
} 