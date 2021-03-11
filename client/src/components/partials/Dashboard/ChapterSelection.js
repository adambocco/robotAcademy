import React from 'react'
import PropTypes from 'prop-types'
import ChapterListItem from './ChapterListItem';


const ChapterSelection = (props) => {


  const chapters = [
    { id: 1, name: "Chapter 1", description: "Getting started" },
    { id: 2, name: "Chapter 2", description: "Basics of CopelliaSim" },
    { id: 3, name: "Chapter 3", description: "Creating Our First Project" },
    { id: 4, name: "Chapter 4", description: "Basics of 3D Shapes" },
    { id: 5, name: "Chapter 5", description: "Translation and Scaling" }
  ];

  return (
    <div>
      {chapters.map(chapter => 
          <ChapterListItem chapter={chapter.name} description={chapter.description}/>
      )}

    </div>
  )
};

export default ChapterSelection;
