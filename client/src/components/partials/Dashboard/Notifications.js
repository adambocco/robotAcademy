import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'

const Notifications = (props) => {


    const notifications = [
        { sender: "Sender 1", message: "Message content" },
        { sender: "Sender 2", message: "Message content" },
        { sender: "Sender 3", message: "Message content" },
        { sender: "Sender 4", message: "Message content" },

    ]

    return (
        <div>

            <div class="my-3 p-3 bg-white rounded box-shadow">
                <h6 class="border-bottom border-gray pb-2 mb-0">Available Labs</h6>

                {notifications.map(notif =>
            <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong class="d-block text-gray-dark">{notif.sender}</strong>
                    {notif.message}
                </p>

            <a href="" className="pull-right"><i class="fas fa-arrow-circle-right fa-3x"></i></a>
            </div>   
            )}
            </div>

        </div>
    )
}

export default Notifications;
