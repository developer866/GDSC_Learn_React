import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import { useState } from 'react'

function FeedbackForm() {
const [text,setText] = useState('')
const [btnDisabled,setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')

const handleTextChange =(e) => {
  // This is a if statement that checks for the validity of the user input
  // This can be easily done using react-form-dom
  if (text === "") {
    setBtnDisabled(true);
    setMessage(null);
  } else if (text !== "" && text.trim().length <= 10) {
    setMessage("Text must atleast be 10 characters");
    setBtnDisabled(true);
  } else {
    setMessage(null);
    setBtnDisabled(false);
  }
  setText(e.target.value);
};

// 
//   Here is something important to notice
//   The card component was render as a normal html tag 
//   instead of <card />
//   It was rendered in this <card></card> format
//   now the reason for this is because the card component was created already 
//   and we want to craete other card to share smilar functionality so insteaded of creating 
//   a new card component .......
// 
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
         <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
