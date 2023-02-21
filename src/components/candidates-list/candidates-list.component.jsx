import React from 'react'
import CandidateItem from '../candidate-item/candidate-item.component'
import ListController from '../list-controller/list-controller.component'
import './candidates-list.styles.css'

function CandidatesList() {
  return (
    <div className='candidateList'>
        <ListController />
        <CandidateItem />
        <CandidateItem />
        <CandidateItem />
    </div>
  )
}

export default CandidatesList