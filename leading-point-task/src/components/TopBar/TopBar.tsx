import {FC} from 'react';
import {Input} from 'antd';
import { SearchOutlined,BellOutlined   } from '@ant-design/icons';
// Style
import './TopBar.scss';

interface TopBar{
    title:string;
    isFieldShow?:boolean;
};


const TopBar:FC<TopBar> = ({title, isFieldShow = false})=>{
    return (
        <div className="top-bar">
           <h1>{title}</h1>


{!isFieldShow ? 
        <div className="top-bar__icons">
            <SearchOutlined className="icon"/>
            <BellOutlined className="icon"/>
        </div>
        :
        <div className="top-bar__search-field">
        <Input
      placeholder="Try 'Miami brachhouse'"
      suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
    </div>
}



        </div>
    )
};

export default TopBar;