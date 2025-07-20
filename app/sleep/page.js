"use client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SleepPage() {
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    const fetchSleep = async () => {
      try {
        const res = await fetch("/api2/sleep-data");
        const json = await res.json();
        if (json.success) {
          const allData = json.data;

          // Filter last 7 days
          const today = new Date();
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(today.getDate() - 6); // Include today

          const filteredData = allData.filter((entry) => {
            const entryDate = new Date(entry.date);
            return entryDate >= sevenDaysAgo && entryDate <= today;
          });

          // Sort by date ascending (optional for clean graph)
          filteredData.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );

          setSleepData(filteredData);
        }
      } catch (error) {
        console.error("Error fetching sleep data:", error);
      }
    };

    fetchSleep();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-indigo-600 text-center mb-10">
          💤 Sleep Tracker Dashboard
        </h1>

        {sleepData.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No sleep data found.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={sleepData}
              margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis
                label={{
                  value: "Hours Slept",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" },
                }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                formatter={(value) => [`${value} hrs`, "Sleep"]}
                labelStyle={{ fontWeight: "bold" }}
              />
              <Bar
                dataKey="hoursSlept"
                fill="#6366f1"
                radius={[10, 10, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
