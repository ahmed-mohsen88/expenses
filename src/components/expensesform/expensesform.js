import React, { useState } from "react";

function Expensesform(props) {
  let [title, settitle] = useState("");
  let [userinput , setUserinput] = useState({
    amountchanged:"",
    datechanged:""
  });
  const amountchangedHandle = (e)=>{
   setUserinput({ ...userinput , amountchanged : e.target.value})
  };
  const datechangedHandle=(e)=>{
    setUserinput({...userinput , datechanged : e.target.value})
  };

  const titchandged = (event)=>{
    settitle(event.target.value)
  };

  let submitted = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(userinput.amountchanged)
    console.log(userinput.datechanged)
    props.onsaved(title , userinput.amountchanged , userinput.datechanged)
  };

  return (
    <form onSubmit = {submitted}>
      <label for="title">title</label>
      <input type="text" name="title"  value={title} onChange={titchandged}/>

      <label for="amount">amount</label>
      <input type="number" name="amount" onChange={amountchangedHandle}/>

      <label for="date">date</label>
      <input type="date" name="date" onChange={datechangedHandle} />

      <input type="submit" name="submit" value="Submit" onSubmit={submitted}  />
    </form>
  );
}

export default Expensesform;
