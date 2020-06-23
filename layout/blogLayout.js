import React, { Children } from 'react'

function blogLayout({...props}){

  return(
  <div className="layoutblog">
    <div className="navbar">
      <div className="logo"></div>
      <img src="img/menu.svg"></img>
    </div>
    <div className="menuMobile">
    <a>Home</a>
    <a>Blog</a>
    </div>
  </div>
  )
}

export default blogLayout