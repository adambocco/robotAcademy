import React from 'react'
import HintBar from './HintBar'


const FillInTheBlank = () => {

    return (
        <div>
            <div class="card">
                <img class="card-img-top" src="robotics3.png" alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Robotics comprehension</h5>
                    <p class="card-text">

                        The answer to the question is
                        <input className="d-inline" type="text"></input>
                        but cannot be
                        <input className="d-inline" type="text"></input>.
                        Other types of answers may be
                        <input className="d-inline" type="text"></input>

                    </p>
                </div>
                <HintBar/>
            </div>
        </div>

    )
}

export default FillInTheBlank;