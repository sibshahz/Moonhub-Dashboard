import React from 'react'
import {UsergroupAddOutlined} from '@ant-design/icons'
import './list-controller.styles.css'
import { Checkbox } from 'antd'
import {LogoutOutlined,AppstoreAddOutlined,DownOutlined} from '@ant-design/icons'

function ListController() {
    const onChange=()=>{
        return;
    }
  return (
    <div className='listController grid grid-cols-3'>
        <div className='resultDetails col-span-1'>
            <span className='icon'><UsergroupAddOutlined style={{ color:'#89888E',minWidth:'32px',minHeight:'32px',textAlign:'center',display:'inherit' }} /></span>
            <span className='number'>4.000</span>
            <span className='candidates'>Candidates</span>
        </div>
        <div className='resultController col-span-2'>
            <Checkbox className="checkBox" onChange={onChange}><span className='selectAll'>Select All on Page</span></Checkbox>
            <button className='btn btn-second'><LogoutOutlined style={{ marginRight:'12px' }} />Export</button>
            <button className='btnIcons'><AppstoreAddOutlined style={{ marginRight:'6px' }} /> Add to Project <DownOutlined style={{ marginLeft:'6px' }} /></button>
        </div>
    </div>
  )
}

export default ListController