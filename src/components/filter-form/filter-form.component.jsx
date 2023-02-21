import React from 'react'
import InputCollapser from '../input-collapser/input-collapser.component'
import {SearchOutlined,DingdingOutlined} from '@ant-design/icons'
import {Select,Input} from 'antd'
import './filter-form.styles.css'
const { TextArea } = Input;
function FilterForm() {
    const handleChange=()=>{
        return;
    };
  return (
    <div>
        <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
        <InputCollapser title={"View Filters For"} down>
        <Select
            defaultValue="linkedin"
            style={{
                width: '100%',
                backgroundColor:'#F3F4F6',
                border: '1px solid #EDEDED',
                borderRadius: '8px',
            }}
            onChange={handleChange}
            options={[
                {
                value: 'linkedin',
                label: 'LinkedIn',
                },
                {
                value: 'upwork',
                label: 'Upwork',
                },
                {
                value: 'github',
                label: 'Github',
                },
            ]}
            />
        </InputCollapser>

        <InputCollapser title="Keywords (LinkedIn)" down>
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </InputCollapser>

        <InputCollapser title="Job Title (LinkedIn)" down>
        <Input
            placeholder="Enter your username"
            suffix={
                <DingdingOutlined 
                    style={{
                    background:'#F3F4F6',
                    }}
                    />
                }
        />
        </InputCollapser>

        <InputCollapser title="Power Filters" down>
            <Input placeholder="Search" />
        </InputCollapser>

        <InputCollapser title="Location (LinkedIn)" down>
            <div className='formFieldTitle mb-3'>Country</div>
            <Input placeholder="Search Country" className='mb-6' />

            <div className='formFieldTitle mb-3'>City</div>
            <Select
            defaultValue="karachi"
            style={{
                width: '100%',
                backgroundColor:'#F3F4F6',
                border: '1px solid #EDEDED',
                borderRadius: '8px',
            }}
            onChange={handleChange}
            options={[
                {
                value: 'karachi',
                label: 'Karachi',
                },
                {
                value: 'ny',
                label: 'New York',
                },
                {
                value: 'delhi',
                label: 'Delhi',
                },
            ]}
            />
        </InputCollapser>
    </div>
  )
}

export default FilterForm