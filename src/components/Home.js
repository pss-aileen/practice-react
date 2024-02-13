import React, { useState, useEffect } from 'react';
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

const Home = () => {
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "words"));
      setWordList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };
    getData();
  }, []);

  console.log(wordList);

  return (
    <div className="content">
      <h1 className="content-title">単語一覧</h1>

      <table className="home-table">
        <thead>
          <tr>
            <th>英単語</th>
            <th>日本語</th>
            <th>解説</th>
          </tr>
        </thead>
        <tbody>
          {wordList.map((word) => {
            return (
              <tr key={word.id}>
                <td>{ word.english }</td>
                <td>{ word.japanese }</td>
                <td>{ word.details }</td>
              </tr>
              )
            })}
        </tbody>
      </table>

    </div>
  )
}

export default Home