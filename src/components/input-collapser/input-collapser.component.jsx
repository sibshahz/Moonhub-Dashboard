import React,{useState} from 'react'
import './input-collapser.styles.css'
import {DownOutlined,UpOutlined} from '@ant-design/icons';


function InputCollapser({children, title,down}) {
    const [open, setOpen] = useState(down);
    const toggleArrow=()=>{
        setOpen(!open)
    };
  return (
    <div className='inputCollapser'>
        <div className='controller grid grid-cols-12 gap-1'>
            <span className='title col-span-6'>{title}</span>
            <span className='bord col-span-5'></span>
            <span className='col-span-1 text-right arrow' onClick={toggleArrow}>
                {open ? <UpOutlined style={{ color:'#AEAEAE' }}/> : <DownOutlined style={{ color:'#AEAEAE' }}/> }
            </span>
        </div>
        {open ? <div className='mt-3 children'>{children}</div> : null}
    </div>
  )
}

export default InputCollapser