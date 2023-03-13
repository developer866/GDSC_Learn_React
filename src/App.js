import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  // This state is created to accept the array that contain the feedback data
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (item) =>{
    let newFeedback  = feedback.filter((feed) => feed.id !== item.id)
    setFeedback(newFeedback)
    console.log("hello world")
    console.log(item.id)
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        {/* This is a feedback component and feed back which is a state that conatin the feedbackdata is passed in as a prop */}
        <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
      </div>
    </>
  );
}

export default App;
