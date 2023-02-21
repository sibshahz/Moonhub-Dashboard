import React from 'react'
import {PhoneOutlined, MailOutlined,LinkedinOutlined,GithubOutlined,RightOutlined} from '@ant-design/icons'
import { Checkbox, Timeline } from 'antd';
import './candidate-item.styles.css'

function CandidateItem() {
    const onChange=(e)=>{
        console.log(`checked = ${e.target.checked}`);
    };
  return (
    <div className='candidateCard'>
        <Checkbox className="checkBox" onChange={onChange}></Checkbox>
        <div className='candidateInfo ml-5 mr-5 mt-3 mb-3'>
            <div className='mainInfo'>
                <h3 className='title'>James Hiddleston <LinkedinOutlined className='ml-2 icons' /><GithubOutlined className='ml-2 icons' /></h3>
                <h5 className='jobTitle'>Machine Learning Engineer</h5>
                <h6 className='location'>San Francisco Bay Area . <PhoneOutlined className='ml-2  icons' /> <MailOutlined className='ml-2 icons' /></h6>
            </div>
            <div className='eduAndExp'>
                <span className='mb-2 block'>Experience</span>
                <Timeline >
                    <Timeline.Item color="#D9D9D9" style={{ paddingBottom:'0' }}>Senior Machine Learning Engineer at Google Oct 2020 - Jun 2022</Timeline.Item>
                    <Timeline.Item color="#D9D9D9" style={{ paddingBottom:'0' }}>Junior Machine Learning Engineer at Spotify Jun 2019 - July 2020</Timeline.Item>
                </Timeline>

                <span className='mb-2 block'>Education</span>
                <Timeline>
                    <Timeline.Item color="#D9D9D9" style={{ paddingBottom:'0' }}>Stanford University, M.S. Computer Science Oct 2016 - Nov 2020</Timeline.Item>
                    <Timeline.Item color="#D9D9D9" style={{ paddingBottom:'0' }}>Stanford University, B.S. Computer Science Oct 2013 - Nov 2016</Timeline.Item>
                </Timeline>
            </div>
        </div>
        <div className='showMore'>
            <a href='#'>Show more <RightOutlined /></a>
        </div>

    </div>
  )
}

export default CandidateItem