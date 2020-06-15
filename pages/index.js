import React from 'react'

function Index(){
  return(
    <div className="personal">
      <div className="sectionMenu">
        <div className="headerMenu">
          <img src="https://i.pinimg.com/564x/23/e3/95/23e3955dec33e9b4f4a1db30d1844216.jpg" alt="personal photography"/>
          <h3>Jean Hernández</h3>
        </div>
      </div>
      <div className="sectionImages">
        {/* <img src="https://i.pinimg.com/564x/55/3a/12/553a12d8ba7860bcddfb4186cf0c99dd.jpg" alt="personal gallery"/> */}
      </div>
      <div className="sectionDesc">
        <p>seccion de descripcion</p>
      </div>
    </div>
  )
}
export default Index
// import Link from 'next/link'
// export default () => (
//   <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
// )
