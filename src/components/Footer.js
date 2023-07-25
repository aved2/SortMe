import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className = 'footer'>
      <p>SortMe - Aditya Ved 2023</p>
      <Link className='aboutLink' to="/about">About</Link>
    </div>
  )
}

export default Footer
