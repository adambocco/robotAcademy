import React, { } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { USER_LOADED, AUTH_ERROR } from '../../redux/types'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { useState } from 'react'
import ChapterSelect from '../partials/Dashboard/ChapterSelect'
import AvailableCourses from '../partials/Dashboard/AvailableCourses'

const Dashboard = ({ history }) => {

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
    height: '500',
    width: '860',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return (


    
    <div className="row">
      <div className="col">
        <ChapterSelect/>
      </div>
      <div className="col">
        <AvailableCourses/>
      </div>

    </div>
  )
}


export default Dashboard