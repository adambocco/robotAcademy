import React, { } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { USER_LOADED, AUTH_ERROR } from '../../redux/types'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { useState } from 'react'
import YouTube from 'react-youtube';
import MultipleChoice from '../partials/MultipleChoice'
import MatchUp from '../partials/MatchUp'
import FillInTheBlank from '../partials/FillInTheBlank'
import AllThatApply from '../partials/AllThatApply'

const Home = ({ history }) => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  useEffect(() => {
    if (localStorage.token)
      loadUsers();
    else
      history.push('/login');
  }, []);

  const loadUsers = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('/api/auth/me');
      setUsername(res.data.data.name);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: AUTH_ERROR, payload: err.message });
    }
  }

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return (
    <div>
      <h1>Hi {username}! Welcome to Application</h1>
      <div className="container">

      <YouTube className="m-auto" videoId="PwGY8PxQOXY" opts={opts} onReady={onReady} />
      </div>

      <div className="container">
        <div className="row">

          <div className="col">
            <MultipleChoice />
          </div>

          <div className="col">
            <MatchUp />
          </div>

          <div className="col">
            <FillInTheBlank />
          </div>
        </div>


        <div className="row">

        <div className="col">
          <MatchUp />
        </div>

        <div className="col">
          <MultipleChoice />
        </div>
      </div>
      </div>
    </div>
  )
}


export default Home
