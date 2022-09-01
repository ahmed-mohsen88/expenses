import React,{useState} from "react";

function Todo() {
  const [newitem, setnewitem] = useState("");
  const [newarr, setnewarr] = useState([]);

  function addlist() {
    const item = {
      id: Math.floor(Math.random * 1000),
      value: newitem,
    };
    setnewarr((oldlist) => [...oldlist, item]);
    setnewitem("");
  }

  return (
    <div>
      <input
        type="text"
        name="task"
        value={newitem}
        onChange={(e) => (setnewitem (e.target.value))}
      />
      <button type="button" onClick={addlist}>
        ADD
      </button>
      <ul>
        {newarr.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
