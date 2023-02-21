import React from 'react';
import './header.styles.css';
import UserPanel from '../user-panel/user-panel.component';

function Header() {
  return (
    <div className='container max-auto header'>
        <div className='flex justify-between shrink flex-wrap'>
            <div className='pl-7 pr-7 lg:col-span-8 md:col-span-12'>
            <h3 className='inline left search'>Search</h3>
            <nav className='mainNav'>
                <span><button className='btn active'>Candidates</button></span>
                <span><button className='btn'>Project</button></span>
                <span><button className='btn'>Lists</button></span>
                <span><button className='btn'>Integrations</button></span>
                <span><button className='btn'>Company</button></span>
            </nav>
            </div>

            <div className='settings pr-7 flex justify-between'>
                <button className='btn btn-second'>Feedback</button>
                <UserPanel />
            </div>
        </div>
    </div>
  )
}

export default Header