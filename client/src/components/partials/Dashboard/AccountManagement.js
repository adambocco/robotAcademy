import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'

const AccountManagement = (props) => {


    const notifications = [
        {sender:"Sender 1", message:"Message content"},
        {sender:"Sender 2", message:"Message content"},
        {sender:"Sender 3", message:"Message content"},
        {sender:"Sender 4", message:"Message content"},
        
    ]

    return (
        <div>

        <h4>Change Password:</h4>
        <hr></hr>
        <input type="text" placeholder="New Username"></input>
        <input type="text" placeholder="New Username Again"></input>

        <h4>Change Password:</h4>
        <hr></hr>
        <input type="text" placeholder="New Password"></input>
        <input type="text" placeholder="New Password Again"></input>

        </div>
    )
}

export default AccountManagement;
