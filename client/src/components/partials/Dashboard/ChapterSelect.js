import React from 'react'
import ChapterSelection from './ChapterSelection'
import { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ChapterSelect = () => {



  
  const courseList = ["Lab 1", "Lab 2", "Lab 3"]
  const defaultCourse = courseList[0]
  return (
    <div>

    <Dropdown options={courseList} value={defaultCourse}/>
    
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <h6 class="border-bottom border-gray pb-2 mb-0">Chapters</h6>


        <ChapterSelection chapterName="Chapter 1" />
      </div>
    </div>
  )
}


export default ChapterSelect;