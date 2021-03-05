import React from 'react';
import HintBar from './HintBar'



const MatchUp = () => {

  return (

    <div>
      <div class="card">
        <img class="card-img-top" src="robotics4.png" alt="Card image cap"></img>
        <div class="card-body">
          <h4>Choose all that apply.</h4>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
              <label class="form-check-label" for="exampleRadios1">
                Default radio
        </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
              <label class="form-check-label" for="exampleRadios2">
                Second default radio
        </label>
            </div>
          </div>
          <HintBar/>
        </div>
      </div>
    </div>


  )
}

export default MatchUp;

