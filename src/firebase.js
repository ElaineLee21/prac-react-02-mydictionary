//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyAryC4tCfY7bwottiaxfNF7rvz4ncG6uo8",
  authDomain: "todays-vocab.firebaseapp.com",
  projectId: "todays-vocab",
  storageBucket: "todays-vocab.appspot.com",
  messagingSenderId: "83342781574",
  appId: "1:83342781574:web:e5873fdd298d1a953eb507",
  measurementId: "G-K137NVF00Z",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
