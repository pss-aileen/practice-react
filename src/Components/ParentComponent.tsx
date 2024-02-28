import React from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent: React.FC = () => {
  const message = "Hello from Parent";
  const number = 12345;
  const data = {
    name: "Aileen",
    age: 30,
    location: "Japan"
  }
  const items = ["Apple", "Banana", "Orange"];
  const handleClick = () => {
    console.log("Button Clicked");
  }

  return (
    <div>
      <h1>ParentComponent</h1>
      <ChildComponent message={message} number={number} data={data} items={items} onClick={handleClick} />
    </div>
  )
}

export default ParentComponent