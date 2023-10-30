import {FC} from 'react'
//Compoents
import Card from 'components/Card';
import TopBar from 'components/TopBar';
// Constants
import {imagePaths} from 'lib/constants/constants'
// Style
import './HomeList.scss';

const HomeList:FC = () => {
    return (
        <div className="home-list">
            <TopBar title="Your Faviourte" isFieldShow/>
            <div className="home-list__container">
                {imagePaths.map(({img, title}) =>{
                    return (
                        <Card cardImg={img} title={title}/>
                    )
                })}
                
            </div>
          
        </div>
    )
};

export default HomeList;