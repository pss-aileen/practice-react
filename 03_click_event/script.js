// "use strict";

  const App = () => {
    const [count, setCount] = React.useState(0);

    function handleClick() {
      // 代入するのでなく、今のcountに1プラスする感じ
      setCount(count + 1);
    }

    return (
      <button onClick={handleClick}>
        click me {count}
      </button>
    );
  };
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(
    <App />
  );
