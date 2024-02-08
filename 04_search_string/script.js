"use strict";
{

  const ListItem = (props) => {
    return (
      <li>
        {props.word}
      </li>
      )
    };
    
    const List = () => {
      const englishWords = ["Apple", "Mountain", "Chair", "Train", "Book", "Elephant", "Computer", "Orange", "Table", "Car", "Pen", "Sun", "Guitar", "Window", "Star", "Coffee", "Dog", "Moon", "Chair", "Plant", "Headphones", "Door", "Ocean", "Tree", "Key", "Clock", "Bird", "Basketball", "Pizza", "Shoes"];
      
      const lists = englishWords.map((word) => {
        return (
          <ListItem
          word={word}
          />
        )});

      return (
        <ul>
          {lists}
        </ul>
      )
    }

  const App = () => {

    const [inputKey, setInputKey] = React.useState("");
  
    function showKey(key) {
      const inputValue = document.querySelector("input").value;
      setInputKey(inputValue);
    }

    function search() {
    }

    return (
      <>
        <input
          onKeyUp={e => showKey(e.key)}
        />
        <p>{inputKey}</p>
        <List />
      </>
    );
  };
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(
    <App />
  );
}