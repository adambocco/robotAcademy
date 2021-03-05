import React from 'react';
import HintBar from './HintBar'



const AllThatApply = () => {

    return (

        <div>
            <div class="card">
                <img class="card-img-top" src="robotics2.png" alt="Card image cap"></img>
                <div class="card-body">
                    <h4>Choose all that apply.</h4>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Answer 1
                        </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Answer 2
                        </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Answer 3
                        </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                                Answer 4
                        </label>
                        </div>


                    </div>
                </div>
                <HintBar/>
            </div>
        </div>


    )
}

export default AllThatApply;
