import React from 'react';
import './user-panel.styles.css';
import { Avatar } from 'antd';
import {DownOutlined} from '@ant-design/icons';
function UserPanel() {
  return (
    <div className='userPanel flex flex-wrap shrink'>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={'large'} className="mr-3" />
        <div className='userInfo mr-3'>
            <h3 className='userTitle'>Esther Howard</h3>
            <span className='userEmail'>ester@gmail.com</span>
        </div>
        <DownOutlined style={{ color:'#AEAEAE' }}/>
    </div>
  )
}

export default UserPanel;