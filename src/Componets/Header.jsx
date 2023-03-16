import React from 'react'
import MainNavBar from './NavBar/MainNavBar'
import MiddleNavBar from './NavBar/MiddleNavBar'
import TopNavBar from './NavBar/TopNavBar'

const Header = () => {
    return (
        <>
            <div class="wrapper">
                <div className="main_header">
                    <TopNavBar />
                    <MiddleNavBar/>
                    <MainNavBar/>
                </div>
            </div>
        </>
    )
}

export default Header
