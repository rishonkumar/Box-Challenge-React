import React, { useState } from 'react'

const Box = (props) => {


    const[on,setOn] = useState(props.on);

    const styles = {
        backgroundColor : on ?  "#222222" : "transparent"
    }

    function toggle() {
        setOn(prevOne => !prevOne)
    }

  return (
    <div style={styles} className='box' onClick = {toggle}></div>
  )
}

export default Box