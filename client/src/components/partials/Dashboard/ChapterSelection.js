import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ChapterSelection = (props) => {


  const chapters = [
    { id: 1, name: "Chapter 1", description: "Getting started" },
    { id: 2, name: "Chapter 2", description: "Basics of CopelliaSim" },
    { id: 3, name: "Chapter 3", description: "Creating Our First Project" },
    { id: 4, name: "Chapter 4", description: "Basics of 3D Shapes" },
    { id: 5, name: "Chapter 5", description: "Translation and Scaling" }
  ];

  const courseList = ["Lab 1", "Lab 2", "Lab 3"]
  const defaultCourse = courseList[0]


  return (
    <div>
      <Dropdown options={courseList} value={defaultCourse}/>
      {chapters.map(chapter => 
        <div class="media text-muted pt-3">
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">{chapter.name}</strong>
            {chapter.description}
          </p>
        </div>
      )}

    </div>
  )
};

export default ChapterSelection;
