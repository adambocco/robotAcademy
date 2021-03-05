import React from 'react'
import HintBar from './HintBar'

const MultipleChoice = () => {

  return (
    <div>
      <div class="card">
        <img class="card-img-top" src="robotics1.png" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Robotics comprehension</h5>
          <p class="card-text">What is the answer to this question?</p>
          <a href="#" class="btn btn-primary">Answer1</a>
          <a href="#" class="btn btn-primary">Answer2</a>
          <a href="#" class="btn btn-primary">Answer3</a>
        </div>
        <HintBar/>
      </div>
    </div>
  )
}

export default MultipleChoice;