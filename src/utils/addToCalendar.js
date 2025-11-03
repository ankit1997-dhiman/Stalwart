export const addToGoogleCalendar = (startTime, finishTime) => {
  const title = "Upcoming Inspection";
  const details = "Discuss project timeline.";
  const start = new Date(startTime).toISOString().replace(/-|:|\.\d+/g, "");
  const end = new Date("2025-11-01T11:00:00Z")
    .toISOString()
    .replace(/-|:|\.\d+/g, "");

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&details=${encodeURIComponent(details)}&dates=${start}/${end}`;

  window.open(url, "_blank");
};
