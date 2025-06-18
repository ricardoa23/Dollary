import React from 'react'
import dashboard from './dashboard'
import SideBar from '../sideBar/SideBar'
import Dashboard from './dashboard'

//Will hold the main portion of the task 
const layout = () => {
  return (
    <div>
        <SideBar/>
        <Dashboard/>
    </div>
  )
}

export default layout