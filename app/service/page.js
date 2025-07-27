// app/services/page.tsx or pages/services.tsx

"use client"; // Only for App Router
import React from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Sleep Tracking",
    description:
      "Monitor your sleep duration, quality, and stages. View detailed logs and insights to optimize your sleep.",
    icon: "🛏️",
    page: "/service/SleepTracking",
  },
  {
    title: "Sleep Analytics & Reports",
    description:
      "Get daily, weekly, and monthly reports with easy-to-understand graphs. Discover trends and track improvements.",
    icon: "📊",
    page: "/service/SleepAnalyticsReports",
  },
  {
    title: "Personalized Sleep Tips",
    description:
      "Receive tailored suggestions based on your sleep habits, lifestyle, and goals to help you rest better.",
    icon: "💡",
    page: "/service/PersonalizedSleepTips",
  },
  {
    title: "Smart Reminders",
    description:
      "Get timely reminders to sleep, log your habits, and follow your night routine consistently.",
    icon: "📱",
    page: "/service/SmartReminders",
  },
  {
    title: "Relaxation & Meditation",
    description:
      "Explore guided meditations, breathing exercises, and calming sleep music to help you wind down.",
    icon: "🧘",
    page: "/service/RelaxationMeditation",
  },
  {
    title: "Lifestyle Tracker",
    description:
      "Track caffeine, screen time, and activity levels to see how daily choices impact your sleep.",
    icon: "🍽️",
    page: "/service/LifestyleTracker",
  },
  {
    title: "Sleep Goal Setting",
    description:
      "Set personalized sleep goals and monitor your progress daily with motivating visual indicators.",
    icon: "🎯",
    page: "/service/SleepGoalSetting",
  },
  {
    title: "Dark Mode Support",
    description:
      "Enjoy a calming dark theme for nighttime usage to protect your eyes and maintain sleep hygiene.",
    icon: "🌙",
    page: "/service/DarkModeSupport",
  },
  {
    title: "AI Insights",
    description:
      "Let our AI analyze your patterns and suggest changes for long-term sleep improvement.",
    icon: "🤖",
    page: "/service/AIInsights",
  },
];

export default function ServicesPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6 lg:px-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
        🌟 Our Services
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-indigo-400"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
            <button
              className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition font-semibold w-full"
              onClick={() => router.push(service.page)}
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
