// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const DELETE = "word/DELETE";
const UPDATE = "word/UPDATE";

const initialState = {
  list: [
    {
      word: "react",
      definition:
        "to change or behave in a particular way as a result of or in response to something",
      example: "You never know how he is going to react.",
    },
    {
      word: "component",
      definition: "one of several parts of which something is made",
      example: "Car components are manufactured in the other factory.",
    },
    {
      word: "programming",
      definition: "the process of writing and testing computer programs",
      example:
        "There are several different kinds of programming languages which have been used in the IT industry.",
    },
  ],
};

// Action Creators
export const loadword = (word, definition, example) => {
  return { type: LOAD, word };
};

export const createword = (word, definition, example) => {
  return { type: CREATE, word };
};

export const deleteword = (word, definition, example) => {
  return { type: DELETE, word };
};

export const updateword = (word, definition, example) => {
  return { type: UPDATE, word };
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case "word/LOAD": {
      return state;
    }

    case "word/CREATE": {
      const new_word_list = [
        ...state.list,
        { text: action.word, completed: false },
      ];
      return { list: new_word_list };
    }

    case "word/DELETE": {
      const word_list = state.list.filter((l, idx) => {
        if (idx !== action.word) {
          return l;
        }
      });
      return { list: word_list };
    }

    case "word/UPDATE": {
      const word_list = state.list.map((l, idx) => {
        if (idx === action.word) {
          return { ...l, completed: true };
        }

        return l;
      });

      return { list: word_list };
    }

    default:
      return state;
  }
}
