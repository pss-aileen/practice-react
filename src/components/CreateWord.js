import React, { useEffect, useState } from 'react'
import "./CreateWord.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import { useNavigate } from 'react-router-dom';


const CreateWord = ({isAuth}) => {
  const [english, setEnglish] = useState();
  const [japanese, setJapanese] = useState();
  const [wordDetail, setWordDetail] = useState();

  const navigate = useNavigate();

  const createWord = async (e) => {
    e.preventDefault();
    // console.log(english, japanese, wordDetail);
    await addDoc(collection(db, "words"), {
      english: english,
      japanese: japanese,
      details: wordDetail,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
      }
  });

  return (
    <div className="create-word content">
      <h1 className="content-title">単語を追加する</h1>
      <form className="input-form">
        <label>
          <input
            type="text"
            placeholder='英単語'
            onChange={(e)=> setEnglish(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder='日本語の意味（簡潔に）'
            onChange={(e)=> setJapanese(e.target.value)}
          />
        </label>
        <label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder='単語に対する解説'
            onChange={(e)=> setWordDetail(e.target.value)}
          ></textarea>
        </label>
        <button onClick={(e) => createWord(e)}>追加する</button>
      </form>
    </div>
  )
}

export default CreateWord