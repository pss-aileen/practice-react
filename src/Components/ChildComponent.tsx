import React from 'react'

interface Props {
  message: string;
  number: number;
  data: {
    name: string;
    age: number;
    location: string;
  };
  items: string[];
  onClick: () => void;
}

const ChildComponent: React.FC<Props> = (props) => {
  return (
    <>
      <h2>ChildComponent</h2>
      <ul>
        <li>{props.message}</li>
        <li>{props.number}</li>
        <li>
          {props.data.name}
        </li>
        <li>
          {props.items.map((item, index) => {
            return <span key={index}>{item}, </span>
          })}
        </li>
        <li>
          <button onClick={props.onClick}>ボタン</button>
        </li>
      </ul>
      <ul>
        <li>dataをそのまま props.data のように書こうとするとエラーがでる、波括弧をサポートしてませんよと</li>
      </ul>
    </>
  )
}

export default ChildComponent