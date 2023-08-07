export const categories = [
  { name: "Art", value: "Art" },
  { name: "Music", value: "Music" },
  { name: "Business", value: "Business" },
  { name: "Conference", value: "Conference" },
  { name: "Workshop", value: "Workshop" },
  { name: "Party", value: "Party" },
  { name: "Sport", value: "Sport" },
];

export const priorities = [
  { name: "Low", value: 1 },
  { name: "Medium", value: 2 },
  { name: "High", value: 3 },
];

export const sortParam = [
  { label: "Sort by A-Z", text: "Name", type: "title", order: "asc" },
  { label: "Sort by Z-A", text: "Name", type: "title", order: "desc" },
  { label: "Sort by data", text: "Date", type: "date", order: "asc" },
  { label: "Sort by data", text: "Date", type: "date", order: "desc" },
  {
    label: "Sort by priority",
    text: "Priority",
    type: "priority",
    order: "asc",
  },
  {
    label: "Sort by priority",
    text: "Priority",
    type: "priority",
    order: "desc",
  },
];
