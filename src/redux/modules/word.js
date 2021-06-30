// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const myWordsDefault = {
  word_list: [
    {
      id: "card_0",
      word: "react",
      desc: "to behave in a particular way as a result of something",
      example: "You never know how he is going to react.",
    },
    {
      id: "card_1",
      word: "component ",
      desc: "one of several parts of which something is made",
      example: "Nitrogen is the main component of air.",
    },
    {
      id: "card_2",
      word: "programming",
      desc: "the process of writing and testing computer programs",
      example:
        "There are several different kinds of programming languages which have been used in the IT industry.",
    },
  ],
};

// Action Creators
export const loadWord = (word_list) => {
  return { type: LOAD, word_list };
};

export const createWord = (wordItem) => {
  return { type: CREATE, wordItem };
};

// Reducer
export default function reducer(state = myWordsDefault, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "word/LOAD": {
      return state;
    }

    case "word/CREATE": {
      const new_word_list = [...state.word_list, action.wordItem];
      return { ...state, word_list: new_word_list };
    }

    default:
      return state;
  }
}
