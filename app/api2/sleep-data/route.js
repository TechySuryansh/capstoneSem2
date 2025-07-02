export async function GET() {
    const sleepData = [
      {
        date: "2025-06-30",
        hoursSlept: 7.5,
        quality: "Good",
      },
      {
        date: "2025-06-29",
        hoursSlept: 6.0,
        quality: "Average",
      },
      {
        date: "2025-06-28",
        hoursSlept: 8.2,
        quality: "Excellent",
      },
    ];
  
    return Response.json({ success: true, data: sleepData });
  }
  