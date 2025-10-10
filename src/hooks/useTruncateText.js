export const useTruncateText = (text, wordLimit = 15) => {
  if (!text) return "";

  const words = text
    .replace(/\r?\n|\r/g, " ")
    .split(" ")
    .filter(Boolean);

  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : words.join(" ");
};
