import React from 'react';
import CandidatesList from '../candidates-list/candidates-list.component';
import FilterForm from '../filter-form/filter-form.component';
import './dashboard.styles.css';
function Dashboard() {
  return (
    <div className='dashboard grid grid-cols-12 gap-0'>
      <span className='col-span-4 pl-6 pr-6 pt-4 pb-4 sider'><FilterForm /></span>
      <span className="col-span-8 pl-6 pr-6 pt-4 pb-4 mainList"><CandidatesList /></span>
    </div>
  )
}

export default Dashboard