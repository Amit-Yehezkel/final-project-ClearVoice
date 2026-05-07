export const initialPhrases = [
  {
    id: 1,
    label: "מים",
  },
  {
    id: 2,
    label: "אמא",
  },
  {
    id: 3,
    label: "כואב לי",
  },
  {
    id: 4,
    label: "אני רוצה לנוח",
  },
];

export const initialRecordings = {
  1: [
    {
      id: 101,
      name: "הקלטה 1",
      date: "01.05.2026",
    },
    {
      id: 102,
      name: "הקלטה 2",
      date: "01.05.2026",
    },
    {
      id: 103,
      name: "הקלטה 3",
      date: "02.05.2026",
    },
  ],

  2: [
    {
      id: 201,
      name: "הקלטה 1",
      date: "01.05.2026",
    },
    {
      id: 202,
      name: "הקלטה 2",
      date: "02.05.2026",
    },
  ],

  3: [
    {
      id: 301,
      name: "הקלטה 1",
      date: "01.05.2026",
    },
    {
      id: 302,
      name: "הקלטה 2",
      date: "02.05.2026",
    },
  ],

  4: [
    {
      id: 401,
      name: "הקלטה 1",
      date: "02.05.2026",
    },
  ],
};

export const mockHistory = [
  {
    id: 1,
    predictedText: "מים",
    score: 0.86,
    date: "27/04/2026 14:30",
  },
  {
    id: 2,
    predictedText: "כואב לי",
    score: 0.79,
    date: "27/04/2026 15:10",
  },
  {
    id: 3,
    predictedText: "אמא",
    score: 0.82,
    date: "27/04/2026 16:05",
  },
];

export function getMockRecognitionResult() {
  return "מים";
}