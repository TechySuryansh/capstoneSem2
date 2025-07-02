// For app router: app/services/page.tsx
// For pages router: pages/services.tsx

import React from "react";



const services = [
  {
    title: "Sleep Tracking",
    description:
      "Monitor your sleep duration, quality, and stages. View detailed logs and insights to optimize your sleep.",
    icon: "🛏️",
  },
  {
    title: "Sleep Analytics & Reports",
    description:
      "Get daily, weekly, and monthly reports with easy-to-understand graphs. Discover trends and track improvements.",
    icon: "📊",
  },
  {
    title: "Personalized Sleep Tips",
    description:
      "Receive tailored suggestions based on your sleep habits, lifestyle, and goals to help you rest better.",
    icon: "💡",
  },
  {
    title: "Smart Reminders",
    description:
      "Get timely reminders to sleep, log your habits, and follow your night routine consistently.",
    icon: "📱",
  },
  {
    title: "Relaxation & Meditation",
    description:
      "Explore guided meditations, breathing exercises, and calming sleep music to help you wind down.",
    icon: "🧘",
  },
  {
    title: "Lifestyle Tracker",
    description:
      "Track caffeine, screen time, and activity levels to see how daily choices impact your sleep.",
    icon: "🍽️",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}