const BOOKS = [
  {
    id: 1,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",

    chapters: [
      {
        title: "The Case Begins",
        missions: [
          { id: "m1", text: "A mysterious letter arrives at Baker Street." },
          { id: "m2", text: "Holmes analyzes unusual handwriting patterns." }
        ],
        quiz: [
          {
            q: "What starts the investigation?",
            options: ["Letter", "Crime", "Fire"],
            answer: "Letter"
          }
        ]
      }
    ]
  },

  {
    id: 2,
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    chapters: [
      {
        title: "The Fall",
        missions: [
          { id: "m1", text: "Alice follows a strange white rabbit." }
        ],
        quiz: [
          {
            q: "Where does she go?",
            options: ["Wonderland", "Forest", "Sea"],
            answer: "Wonderland"
          }
        ]
      }
    ]
  }
];
