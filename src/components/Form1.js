import "./Form1.css";
import React from 'react'

const Form1 = () => {
  return (
    <div className="form">
        <form>
        <label> Your Name </label>
            <input type="text"></input>
            <label> Email </label>
            <input type="email"></input>
            <label> Purpose </label>
            <input type="text"></input>
            <label> Massage </label>
            <textarea rows="6" placeholder="Message here!"></textarea>
            <button className="btn"> Submit </button>
            
            
        </form>

    </div>
  )
}

export default Form1;
