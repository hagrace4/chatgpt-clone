export const arrayItems = [
  {
    name: 'Q&A',
    id: 'q&a',
    description: 'Ask questions based on existing knowledge',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    }
  },
  {
    name: 'Grammar Correction',
    id: 'grammarCorrection',
    description: 'Correct grammar mistakes',
  },
  {
    name: 'Explain Code',
    id: 'explainCode',
    description: 'Explain code snippets',
  },
  {
    name: 'Calculate Time Complexity',
    id: 'calculateTimeComplexity',
    description: 'Calculate time complexity of code snippets',
  }
]