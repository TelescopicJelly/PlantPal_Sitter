import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="header" >
        <div className='headerContainer'>
            <div className='headerList'>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faSeedling} size="2xl" style={{color: "#669c35",}} />
                <span>Need a Sitter</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faPerson} size="2xl" />
                <span>Becoming a Sitter</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header