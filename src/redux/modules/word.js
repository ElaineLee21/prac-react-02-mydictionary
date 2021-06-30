// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const myWordsDefault = {
  word_list: [
    {
      id: "card_0",
      word: "Today's Vocab에 오신 것을 환영합니다!",
      desc: "오른쪽 아래에 있는 + 버튼을 눌러",
      example: "단어 카드를 추가해주세요 :)",
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
