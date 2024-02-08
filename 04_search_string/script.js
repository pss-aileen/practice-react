"use strict";
{

  const WordList = (props) => {
    const wordList = props.wordList;

    let renderedItems;

    if (props.inputValues) {
      const filteredItems = wordList.filter((word) => {
        const regex = new RegExp(props.inputValues.toLowerCase());
        return regex.test((word).toLowerCase());
      });

      renderedItems = filteredItems.map((word, index) => {
        return (
          <li key={index}>
            {word}
          </li>
        )
      });
    } else {
      renderedItems = wordList.map((word, index) => {
        return (
          <li key={index}>
            {word}
          </li>
        )
      });
    }

    return (
      <ul>
        {renderedItems}
      </ul>
    );
  };

  const App = () => {
    const [input, setInput] = React.useState("");

    const words = [
      "useState", "useEffect", "useContext", "useReducer", "useCallback",
      "useMemo", "useRef", "useImperativeHandle", "useLayoutEffect", "forwardRef",
      "memo", "Suspense", "lazy", "Fragment", "Component", "PureComponent", 
      "createContext", "createElement", "cloneElement", "createFactory", "isValidElement",
      "Children", "render", "hydrate", "unmountComponentAtNode", "findDOMNode",
      "createPortal", "createRef", "StrictMode", "Profiler", "version", "PropTypes",
      "DefaultProps", "useTransition", "useDeferredValue", "useOpaqueIdentifier",
      "useMutableSource", "Interaction Tracing", "Blocking Mode", "Concurrent Mode",
      "Error Boundaries", "Portals", "Context", "Refs", "Hooks", "Fragments"
    ];
    
    function handleChange(e) {
      setInput(e.target.value);
    }
      
    return (
      <>
        <h1>English Words List</h1>
        <input
          onChange={(e) => handleChange(e)}
        />
        <WordList
          wordList={words}
          inputValues={input}
        />
      </>
    );
  };
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(
    <App />
  );
}