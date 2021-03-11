import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'

const AvailableCourses = (props) => {


    const courses = [
        { id: 1, name: "Lab 1", description: "Getting started" },
        { id: 2, name: "Lab 2", description: "Basics of CopelliaSim" },
        { id: 3, name: "Lab 3", description: "Creating Our First Project" },
        { id: 4, name: "Lab 4", description: "Basics of 3D Shapes" },
        { id: 5, name: "Lab 5", description: "Translation and Scaling" }
    ]


    return (
        <div>
        {courses.map(course =>
            <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong class="d-block text-gray-dark">{course.name}</strong>
                    {course.description}
                </p>
            </div>
        )}

        </div>
    )
}

export default AvailableCourses;
