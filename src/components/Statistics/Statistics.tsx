import React,{ReactNode} from 'react';
import { Progress } from 'antd';
// Compoents
import TopBar from 'components/TopBar'
// Style
import './Statistics.scss';


interface StatInfo {
    label: string;
    number: string;
    icons: ReactNode;
  }

const STATISTICS_INFO: Record<string, StatInfo> = {
    TODAYS_SALES: {
        label: 'Todays sales',
        number: '2,456',
        icons: <Progress size={95} type="circle" percent={70} strokeColor={'var(--color-green-6)'} format={()=> <img src="totalSales.svg"/>}/>
    },
    NEW_PRODUCTS: {
        label: 'New Products',
        number: '221',
        icons: <Progress size={95} type="circle" percent={70} strokeColor={'var(--color-blue-10)'} format={()=> <img src="newProducts.svg"/>}/>
    },
    INVENTORY: {
        label: 'Inventory',
        number: '1.425',
        icons: <Progress size={95} type="circle" percent={50} strokeColor={'var(--color-red-6)'} format={()=> <img src="inventory.svg"/>}/>,
    }
};

const Statistics: React.FC = () => {
    return( <>
     <TopBar title="Your dashboard"/>
     <div className="statistics">
     {Object.values(STATISTICS_INFO).map((item) => (
        <div className='statistics__container'>
            <div className="statistics--info">
                <div className="statistics--info__label">{item.label}</div>
                <div className="statistics--info__number">{item.number}</div>
            </div>
            <div className="statistics--circle--progress">{item.icons}</div>

        </div>
    ))}
    </div>
    </>
    )



}

export default Statistics 