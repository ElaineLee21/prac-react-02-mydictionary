import { firestore } from "../../firebase";

const word_db = firestore.collection("voca");

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const DELETE = "word/REMOVE";
const ISLOADED = "word/ISLOADED";

const initialState = {
  word_list: [
    {
      word: "오른쪽 아래에 있는 + 버튼을 눌러",
      desc: "단어 카드를 추가해주세요 :)",
      example: "수정삭제는 불가능합니다!",
    },
  ],
  is_loaded: false,
};

// Action Creators
export const loadWord = (wordList) => {
  return { type: LOAD, wordList };
};

export const createWord = (newWordItems) => {
  return { type: CREATE, newWordItems };
};

export const updateWord = (wordIndex) => {
  return { type: UPDATE, wordIndex };
};

export const deleteWord = (wordIndex) => {
  return { type: DELETE, wordIndex };
};

export const isLoaded = (loaded) => {
  return { type: ISLOADED, loaded };
};

// 파이어베이스랑 통신하는 부분
export const loadWordFB = () => {
  return function (dispatch) {
    word_db.get().then((docs) => {
      let word_data = [];
      docs.forEach((doc) => {
        // 도큐먼트 객체를 확인해보자!
        console.log(doc);
        // 도큐먼트 데이터 가져오기
        console.log(doc.data());
        // 도큐먼트 id 가져오기
        console.log(doc.id);

        if (doc.exists) {
          word_data = [...word_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(word_data);
      // 이제 액션 생성 함수한테 우리가 가져온 데이터를 넘겨줘요! 그러면 끝!
      dispatch(loadWord(word_data));
    });
  };
};

export const addWordFB = (newWordItems) => {
  return function (dispatch) {
    let word_data = newWordItems;

    word_db.add(word_data).then((docRef) => {
      word_data = { ...word_data, id: docRef.id };
      console.log(word_data);
      dispatch(createWord(word_data));
      window.location.reload();
    });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      if (action.wordList.length > 0) {
        return { word_list: action.wordList };
      }

      return state;
    }

    case "word/CREATE": {
      const new_word = [...state.word_list, action.newWordItems];
      return { word_list: new_word };
    }

    case "word/UPDATE": {
      const new_list = state.word_list.map((l, ind) => {
        if (ind === action.wordIndex) {
          return action.reWordItems;
        } else {
          return l;
        }
      });
      return { word_list: new_list };
    }

    case "word/DELETE": {
      const new_list = state.word_list.filter((l, idx) => {
        // 삭제하고 싶은 인덱스가 아닐때만 해당 내용물을 리턴해서 사전 리스트를 구성하라는 것
        if (idx !== action.wordIndex) {
          return l;
        }
      });
      return { list: new_list };
    }

    case "word/ISLOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }
}
