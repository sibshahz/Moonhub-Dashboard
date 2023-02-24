import React,{useState} from 'react'
import './input-collapser.styles.css'
import {DownOutlined,UpOutlined} from '@ant-design/icons';
import { motion, useAnimationControls } from "framer-motion"


function InputCollapser({children, title,down}) {
    const controls = useAnimationControls();

    const [open, setOpen] = useState(down);


    const toggleArrow=()=>{
        if(open){
            controls.start({ scaleY: 1,display:"block" })
            
        }else{
            controls.start({scaleY: 0,display:"none"})


        }
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
        <motion.div animate={controls} className='mt-3 children'>{children}</motion.div>

    </div>
  )
}

export default InputCollapser