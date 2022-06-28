import React, { useState } from 'react'

const Box = (props) => {


    // const[on,setOn] = useState(props.on);

    const styles = {
        backgroundColor : props.on ?  "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOne => !prevOne)
    // }

  return (
    // <div style={styles} className='box' onClick = {toggle}></div>
    <div 
        style={styles} 
        className='box'
        // onClick={()=>props.toggle(props.id)}
        onClick={props.toggle}
        >
        </div>
  )
}

export default Box