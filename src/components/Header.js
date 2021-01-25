// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'  // this helps use to locate/know the current Route we are present on

/*
const Header = (props) =>  {
  return (
    <header>
      <h1> Task Tracker </h1>
      <h1> {props.title} </h1>
    </header>
  )
}
*/

// Using destructred Props in the very parameters directly
const Header = ({ title, onAdd, showAdd }) => {
  /*
  const onClick = (e) => {
    console.log('Clicked');
    console.log(e);
  }
  // Use this in below Button Componenet: onClick={onClick}
  */
  const location = useLocation()

  return (
    <header className='header'>
      <h1> {title} </h1>
      { location.pathname === '/' && (
        < Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      )}

    </header>
  )
}


// Default Components 'Props' will be passed if we don't get any from the main App.
Header.defaultProps = {
  title: "Task Tracker Title Default",
}

// Prop types to define the datatype of props 
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
// Using propTypes, we will get Warning in Console if wrong datatype is provided

export default Header