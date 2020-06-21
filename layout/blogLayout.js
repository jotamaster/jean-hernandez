import React, { Children } from 'react'

function blogLayout({...props}){

  return(
  <div>hola soy el otro layout{props.children}</div>
  )
}

export default blogLayout