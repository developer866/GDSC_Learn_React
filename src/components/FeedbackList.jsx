import React from 'react'
import FeedbackItem from './FeedbackItem';


function FeedbackList({feedback,handleDelete}) {
    if  (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>;
      }
 
  return (
    <div className='feedback-list'>
      {feedback.map((item)=> (
       <FeedbackItem key={item.id} item={item} handleDelete={()=>handleDelete(item)}/>
      ))}
      
    </div>
  )
}

export default FeedbackList
