import {FC} from 'react';
import { Space, Tag } from 'antd';

// Style
import './Tag.scss';

interface CustomBadgeInterface {
    info?:any;
}

const CustomTag:FC<CustomBadgeInterface> = ({info})=>{
    return (
        <Space>
           <Tag
                style={{
                  color:info.fontColor,
                  backgroundColor:info.color,
                  border:'0',
                  margin:"auto"
                }}
                className="custom-tag"
            >
                    {info?.label}

                </Tag>
         </Space>
    )
};

export default CustomTag;
