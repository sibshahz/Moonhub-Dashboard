import React from 'react'
import {UsergroupAddOutlined} from '@ant-design/icons'
import './list-controller.styles.css'

function ListController() {
  return (
    <div className='listController'>
        <div className='resultDetails'>
            <span className='icon'><UsergroupAddOutlined style={{ color:'#89888E',minWidth:'32px',minHeight:'32px',textAlign:'center',display:'inherit' }} /></span>
            <span className='number'>4.000</span>
            <span className='candidates'>Candidates</span>
        </div>
    </div>
  )
}

export default ListController