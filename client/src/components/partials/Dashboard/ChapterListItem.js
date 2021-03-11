import React from 'react'
import ChapterSelection from './ChapterSelection'
import { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PropTypes from 'prop-types'

const ChapterListItem = (props) => {

    console.log("CHAPTERLISTITEM PROPS: ", props)


    const sectionList = ["Section 1", "Section 2", "Section 3"]
    const defaultSection = sectionList[0]
    return (
        <div>
            <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Chapter Name</strong>
      Chapter Description
                </p>
            </div>

            <Dropdown options={sectionList} value={defaultSection} />

        </div>
    )
}


export default ChapterListItem;