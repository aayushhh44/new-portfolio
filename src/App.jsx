import React from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Center from './components/Center'
import FirstPage from './pages/FirstPage'
import PersonalProjects from './components/PersonalProjects'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <FirstPage />
        <hr/>
        {/* <PersonalProjects/> */}
        <AboutMe/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default App
