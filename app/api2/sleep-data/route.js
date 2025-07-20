export async function GET() {
  const today = new Date();
  const sleepData = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);

    sleepData.push({
      date: d.toISOString().slice(0, 10), // "YYYY-MM-DD"
      hoursSlept: +(6 + Math.random() * 2).toFixed(1), // 6.0 to 8.0 hrs
      quality: ["Poor", "Average", "Good", "Excellent"][
        Math.floor(Math.random() * 4)
      ],
    });
  }

  return Response.json({ success: true, data: sleepData });
}
